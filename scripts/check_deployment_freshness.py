#!/usr/bin/env python3
"""
Deployment Freshness & Critical Workflow Health Monitor for TheHGTech.

Read-only operational check (zero repository writes, zero paid dependencies):
  1. Verifies the latest commit on `main` has deployed cleanly via GitHub Pages
     within `--max-lag-minutes` and that the latest `pages-build-deployment` run
     did not fail.
  2. Verifies critical scheduled workflows have succeeded within their expected
     cadence windows and did not fail on their latest completed run.
  3. Runs live HTTPS smoke checks on public endpoints and confirms Jekyll
     exclusions remain active in production.
"""

import argparse
import json
import os
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone

CRITICAL_WORKFLOWS = {
    ".github/workflows/threat-intel.yml": {"label": "RSS Threat Intel Update", "max_age_hours": 10},
    ".github/workflows/hacker-chatter.yml": {"label": "Update Hacker Chatter Data", "max_age_hours": 20},
    ".github/workflows/ransomware.yml": {"label": "Update Ransomware Data", "max_age_hours": 20},
    ".github/workflows/update-shorts.yml": {"label": "Update TheHGTech Shorts", "max_age_hours": 20},
    ".github/workflows/build-articles.yml": {"label": "Build Articles & CVE Map", "max_age_hours": 32},
}


def parse_iso_utc(ts: str):
    if not ts:
        return None
    return datetime.fromisoformat(ts.replace("Z", "+00:00")).astimezone(timezone.utc)


def github_api_get(url: str, token: str = ""):
    headers = {
        "User-Agent": "TheHGTech-Deployment-Monitor/1.0",
        "Accept": "application/vnd.github+json",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=20) as resp:
        return json.loads(resp.read().decode("utf-8"))


def http_smoke_check(url: str):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "TheHGTech-Deployment-Monitor/1.0",
            "Cache-Control": "no-cache",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            body = resp.read(65536).decode("utf-8", errors="replace")
            return resp.status, body
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception as e:
        return None, str(e)


def evaluate_pages_freshness(main_commit: dict, pages_runs: list, deployments: list, now_utc: datetime, max_lag_minutes: int):
    """Evaluate whether GitHub Pages deployment matches `main` within SLA."""
    failures = []
    warnings = []

    main_sha = main_commit.get("sha", "")
    commit_ts = parse_iso_utc(
        (main_commit.get("commit", {}).get("committer") or {}).get("date")
        or (main_commit.get("commit", {}).get("author") or {}).get("date")
    )
    commit_age_min = (now_utc - commit_ts).total_seconds() / 60.0 if commit_ts else 0.0

    latest_pages_run = pages_runs[0] if pages_runs else None
    latest_completed_pages = next((r for r in pages_runs if r.get("status") == "completed"), None)
    latest_success_pages = next(
        (r for r in pages_runs if r.get("status") == "completed" and r.get("conclusion") == "success"),
        None,
    )

    if not latest_pages_run:
        failures.append("No GitHub Pages build runs (`pages-build-deployment`) found in recent workflow history.")
    else:
        if latest_completed_pages and latest_completed_pages.get("conclusion") == "failure":
            failures.append(
                f"Latest completed Pages build run `{latest_completed_pages.get('id')}` "
                f"(SHA `{(latest_completed_pages.get('head_sha') or '')[:9]}`) FAILED."
            )

        deployed_sha = (latest_success_pages or {}).get("head_sha", "")
        if deployed_sha != main_sha:
            if latest_pages_run.get("head_sha") == main_sha and latest_pages_run.get("status") in ("queued", "in_progress"):
                if commit_age_min > max_lag_minutes:
                    failures.append(
                        f"Pages build for `main` HEAD `{main_sha[:9]}` has been `{latest_pages_run.get('status')}` "
                        f"for {commit_age_min:.1f}m (exceeds {max_lag_minutes}m SLA)."
                    )
                else:
                    warnings.append(
                        f"Pages build for `main` HEAD `{main_sha[:9]}` is currently `{latest_pages_run.get('status')}` "
                        f"({commit_age_min:.1f}m old)."
                    )
            elif commit_age_min > max_lag_minutes:
                failures.append(
                    f"STALE DEPLOYMENT: `main` HEAD `{main_sha[:9]}` is {commit_age_min:.1f}m old, "
                    f"but latest successful Pages build is `{deployed_sha[:9] or 'none'}` "
                    f"(exceeds {max_lag_minutes}m SLA — check workflow commit authentication / Pages queue)."
                )
            else:
                warnings.append(
                    f"`main` HEAD `{main_sha[:9]}` ({commit_age_min:.1f}m old) awaiting Pages build; "
                    f"last deployed `{deployed_sha[:9] or 'none'}`."
                )

    latest_dep_sha = deployments[0].get("sha", "") if deployments else ""
    summary = {
        "main_sha": main_sha[:9],
        "main_commit_age_minutes": round(commit_age_min, 1),
        "latest_pages_run_id": (latest_pages_run or {}).get("id"),
        "latest_pages_run_status": (latest_pages_run or {}).get("status"),
        "latest_pages_run_conclusion": (latest_pages_run or {}).get("conclusion"),
        "latest_success_pages_sha": ((latest_success_pages or {}).get("head_sha") or "")[:9],
        "latest_deployment_sha": latest_dep_sha[:9],
    }
    return failures, warnings, summary


def evaluate_workflow_health(runs_by_path: dict, now_utc: datetime):
    """Evaluate latest completed run conclusion and recency for critical workflows."""
    failures = []
    warnings = []
    rows = []

    for wf_path, cfg in CRITICAL_WORKFLOWS.items():
        runs = runs_by_path.get(wf_path, [])
        completed = [r for r in runs if r.get("status") == "completed"]
        latest = completed[0] if completed else None
        latest_success = next((r for r in completed if r.get("conclusion") == "success"), None)

        if not latest:
            warnings.append(f"{cfg['label']} (`{wf_path}`): no completed runs found in sampled history.")
            rows.append((cfg["label"], "unknown", "n/a", "⚠️ No history"))
            continue

        conclusion = latest.get("conclusion") or "unknown"
        updated_dt = parse_iso_utc(latest.get("updated_at") or latest.get("created_at"))
        age_hours = (now_utc - updated_dt).total_seconds() / 3600.0 if updated_dt else 0.0

        success_dt = parse_iso_utc((latest_success or {}).get("updated_at") or (latest_success or {}).get("created_at"))
        success_age_hours = (now_utc - success_dt).total_seconds() / 3600.0 if success_dt else None

        if conclusion == "failure":
            failures.append(
                f"Workflow `{cfg['label']}` (`{wf_path}`) failed on run `{latest.get('id')}` "
                f"({age_hours:.1f}h ago)."
            )
            status_str = f"❌ Failed (run `{latest.get('id')}`)"
        elif success_age_hours is not None and success_age_hours > cfg["max_age_hours"]:
            failures.append(
                f"Workflow `{cfg['label']}` (`{wf_path}`) has no successful run in {success_age_hours:.1f}h "
                f"(SLA: {cfg['max_age_hours']}h)."
            )
            status_str = f"❌ Stale ({success_age_hours:.1f}h > {cfg['max_age_hours']}h)"
        else:
            status_str = f"✅ {conclusion} ({age_hours:.1f}h ago)"

        rows.append((cfg["label"], str(latest.get("id")), f"{age_hours:.1f}h", status_str))

    return failures, warnings, rows


def run_live_smoke_checks(site_url: str):
    failures = []
    results = {}
    base = site_url.rstrip("/")

    checks = [
        (f"{base}/", 200, "Homepage"),
        (f"{base}/.well-known/security.txt", 200, "RFC 9116 security.txt"),
        (f"{base}/cve-data.json", 200, "CVE JSON feed"),
        (f"{base}/SEO-IMPROVEMENT-PLAN.html", 404, "Jekyll internal doc exclusion"),
    ]
    for url, expected, label in checks:
        status, body = http_smoke_check(url)
        results[label] = {"url": url, "expected": expected, "actual": status}
        if status != expected:
            failures.append(f"Live smoke check failed for {label} (`{url}`): expected HTTP {expected}, got {status}.")
        elif url.endswith("/cve-data.json") and status == 200:
            try:
                parsed = json.loads(body) if body else {}
                if not isinstance(parsed, dict) or "cves" not in parsed:
                    # Handle truncated 64KB preview cleanly by checking prefix
                    if '"cves"' not in body:
                        failures.append("Live `/cve-data.json` response missing expected `cves` payload.")
            except json.JSONDecodeError:
                # Response >64KB truncates preview; confirm JSON object start & cves key
                if not (body.lstrip().startswith("{") and '"cves"' in body):
                    failures.append("Live `/cve-data.json` did not return valid JSON structure.")

    return failures, results


def format_markdown_summary(pages_summary, wf_rows, smoke_results, failures, warnings):
    lines = [
        "### 📡 TheHGTech Deployment Freshness & Operations Report",
        "",
        f"- **Overall Status:** {'❌ ACTION REQUIRED' if failures else '✅ HEALTHY'}",
        f"- **`main` HEAD:** `{pages_summary['main_sha']}` ({pages_summary['main_commit_age_minutes']}m old)",
        f"- **Latest Successful Pages Build SHA:** `{pages_summary['latest_success_pages_sha'] or 'none'}`",
        f"- **Latest Pages Run:** `{pages_summary['latest_pages_run_id']}` (`{pages_summary['latest_pages_run_status']}` / `{pages_summary['latest_pages_run_conclusion']}`)",
        "",
        "#### Critical Workflows",
        "| Workflow | Latest Run ID | Age | Status |",
        "| :--- | :--- | :---: | :--- |",
    ]
    for label, run_id, age, st in wf_rows:
        lines.append(f"| {label} | `{run_id}` | {age} | {st} |")

    lines.extend([
        "",
        "#### Live Production Smoke Checks",
        "| Check | Expected | Actual |",
        "| :--- | :---: | :---: |",
    ])
    for label, r in smoke_results.items():
        icon = "✅" if r["actual"] == r["expected"] else "❌"
        lines.append(f"| {label} | `{r['expected']}` | {icon} `{r['actual']}` |")

    if warnings:
        lines.extend(["", "#### Warnings"])
        for w in warnings:
            lines.append(f"- ⚠️ {w}")

    if failures:
        lines.extend(["", "#### Actionable Failures"])
        for f in failures:
            lines.append(f"- ❌ {f}")

    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="Verify GitHub Pages deployment freshness and workflow health.")
    parser.add_argument("--repo", default=os.environ.get("GITHUB_REPOSITORY", "Harish761/thehgtech"))
    parser.add_argument("--max-lag-minutes", type=int, default=25)
    parser.add_argument("--site-url", default="https://thehgtech.com")
    parser.add_argument("--skip-live-http", action="store_true")
    args = parser.parse_args()

    token = os.environ.get("GITHUB_TOKEN", "")
    now_utc = datetime.now(timezone.utc)
    api_base = f"https://api.github.com/repos/{args.repo}"

    main_commit = github_api_get(f"{api_base}/commits/main", token=token)
    runs_resp = github_api_get(f"{api_base}/actions/runs?per_page=100", token=token)
    all_runs = runs_resp.get("workflow_runs", [])
    deployments = github_api_get(f"{api_base}/deployments?environment=github-pages&per_page=5", token=token)

    pages_runs = [r for r in all_runs if "pages-build-deployment" in (r.get("path") or "")]
    runs_by_path = {}
    for r in all_runs:
        p = r.get("path") or ""
        runs_by_path.setdefault(p, []).append(r)

    p_fail, p_warn, pages_summary = evaluate_pages_freshness(
        main_commit, pages_runs, deployments, now_utc, args.max_lag_minutes
    )
    w_fail, w_warn, wf_rows = evaluate_workflow_health(runs_by_path, now_utc)

    if args.skip_live_http:
        s_fail, smoke_results = [], {}
    else:
        s_fail, smoke_results = run_live_smoke_checks(args.site_url)

    failures = p_fail + w_fail + s_fail
    warnings = p_warn + w_warn

    md = format_markdown_summary(pages_summary, wf_rows, smoke_results, failures, warnings)
    print(md)

    summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary_path:
        with open(summary_path, "a", encoding="utf-8") as sf:
            sf.write(md)

    if failures:
        sys.exit(1)
    sys.exit(0)


if __name__ == "__main__":
    main()
