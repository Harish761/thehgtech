#!/usr/bin/env bash
set -euo pipefail

# Safe Git commit + rebase + push helper for automated GitHub Actions workflows.
# - Stages only explicitly specified paths (never blind `git add .`)
# - Exits cleanly (0) when there are no staged changes
# - Handles concurrent pushes and unstaged workspace files via `--autostash`
#   and bounded exponential backoff retries
# - Fails closed (exit 1) if push cannot succeed after max retries

GIT_USER_NAME="github-actions[bot]"
GIT_USER_EMAIL="41898282+github-actions[bot]@users.noreply.github.com"
COMMIT_MESSAGE=""
BRANCH="main"
MAX_ATTEMPTS=5
PATHS=()

usage() {
  echo "Usage: $0 --message <msg> [--name <name>] [--email <email>] [--branch <branch>] [--max-attempts <n>] -- <path>..." >&2
  exit 2
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --name)
      GIT_USER_NAME="${2:-}"
      shift 2
      ;;
    --email)
      GIT_USER_EMAIL="${2:-}"
      shift 2
      ;;
    --message|-m)
      COMMIT_MESSAGE="${2:-}"
      shift 2
      ;;
    --branch)
      BRANCH="${2:-}"
      shift 2
      ;;
    --max-attempts)
      MAX_ATTEMPTS="${2:-5}"
      shift 2
      ;;
    --)
      shift
      while [[ $# -gt 0 ]]; do
        PATHS+=("$1")
        shift
      done
      ;;
    -h|--help)
      usage
      ;;
    *)
      PATHS+=("$1")
      shift
      ;;
  esac
done

if [[ -z "$COMMIT_MESSAGE" || ${#PATHS[@]} -eq 0 ]]; then
  usage
fi

git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"

# Stage only existing or git-tracked paths from the explicit allowlist
STAGED_ANY=0
for p in "${PATHS[@]}"; do
  if [[ -e "$p" ]] || git ls-files --error-unmatch "$p" >/dev/null 2>&1; then
    git add -- "$p"
    STAGED_ANY=1
  else
    echo "ℹ️ Skipping absent optional path: $p"
  fi
done

if [[ "$STAGED_ANY" -eq 0 ]] || git diff --staged --quiet; then
  echo "ℹ️ No staged changes to commit."
  exit 0
fi

git commit -m "$COMMIT_MESSAGE"

attempt=1
while [[ "$attempt" -le "$MAX_ATTEMPTS" ]]; do
  echo "🔄 Sync & push attempt $attempt/$MAX_ATTEMPTS to origin/$BRANCH..."
  if git pull --rebase --autostash origin "$BRANCH" && git push origin "HEAD:$BRANCH"; then
    echo "✅ Successfully pushed commit to origin/$BRANCH."
    exit 0
  fi

  # Abort an incomplete rebase if one occurred so the next attempt starts clean
  if [[ -d "$(git rev-parse --git-path rebase-merge)" ]] || [[ -d "$(git rev-parse --git-path rebase-apply)" ]]; then
    echo "⚠️ Rebase conflict detected on attempt $attempt; aborting rebase before retry."
    git rebase --abort || true
  fi

  if [[ "$attempt" -lt "$MAX_ATTEMPTS" ]]; then
    sleep_secs=$(( attempt * 3 ))
    echo "⚠️ Push failed (attempt $attempt/$MAX_ATTEMPTS); retrying in ${sleep_secs}s..."
    sleep "$sleep_secs"
  fi
  attempt=$(( attempt + 1 ))
done

echo "❌ CRITICAL: Failed to rebase and push to origin/$BRANCH after $MAX_ATTEMPTS attempts." >&2
exit 1
