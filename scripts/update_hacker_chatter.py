#!/usr/bin/env python3
"""
Hacker Chatter Data Accumulator
Fetches the latest victim chatter from public OSINT APIs (e.g., Ransomware.live),
persists the complete chronological archive in data/hacker-chatter.json, and builds
a lightweight (< 50 KB) browser-facing preview in data/hacker-chatter-recent.json.
No Dark Web or .onion interaction occurs directly.
"""

import argparse
import json
import os
import urllib.error
import urllib.request
from datetime import datetime

DATA_PATH = os.path.join(os.path.dirname(__file__), '../data/hacker-chatter.json')
PREVIEW_PATH = os.path.join(os.path.dirname(__file__), '../data/hacker-chatter-recent.json')
MAX_RECENT_INCIDENTS = 50
MAX_PREVIEW_BYTES = 48_000  # Strictly below 50 KB (51,200 bytes) uncompressed


def fetch_incident_feed():
    print("🌐 Fetching latest OSINT hacker chatter...")
    victims = []
    headers = {"User-Agent": "TheHGTech-OSINT"}

    try:
        # Public Endpoint (Updates daily, 100+ latest victims, no token required)
        url = 'https://api.ransomware.live/v2/recentvictims'
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            raw_data = json.loads(response.read().decode())

        for item in raw_data:
            # Map API structure to our incident feed schema
            incident = {
                "id": _generate_id(item),
                "victim_name": item.get('post_title') or item.get('victim', 'Unknown Organization'),
                "threat_actor": item.get('group_name') or item.get('group', 'Unknown Actor'),
                "date_discovered": item.get('discovered') or item.get('published', datetime.now().isoformat()),
                "industry": item.get('activity') or item.get('industry', 'Unknown'),
                "website": item.get('website', ''),
                "claim": item.get('description', ''),
                "screenshot": item.get('screenshot', ''),
                "url": item.get('post_url') or item.get('claim_url', ''),
                "source": "Ransomware.live OSINT API"
            }
            victims.append(incident)

        print(f"✅ Downloaded {len(victims)} recent incidents.")
    except Exception as e:
        print(f"❌ Failed to fetch from Ransomware.live API: {e}")

    return victims


def _generate_id(item):
    """Generate a unique ID to prevent duplicates using actor + victim name"""
    actor = str(item.get('group_name') or item.get('group', 'unknown')).lower().strip()
    victim = str(item.get('post_title') or item.get('victim', 'unknown')).lower().strip()
    return f"{actor}_{victim}".replace(' ', '_').replace('=', '')


def load_existing_archive(data_path=DATA_PATH):
    """Load complete archive payload returning (incidents_list, last_updated_str_or_none)."""
    if os.path.exists(data_path):
        try:
            with open(data_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
                if isinstance(data, dict) and 'incidents' in data:
                    return data['incidents'], data.get('last_updated')
                elif isinstance(data, list):
                    return data, None
        except Exception as e:
            print(f"⚠️ Could not load existing data, starting fresh: {e}")
    return [], None


def load_existing_data(data_path=DATA_PATH):
    incidents, _ = load_existing_archive(data_path=data_path)
    return incidents


def merge_data_with_stats(existing_incidents, new_incidents):
    """Merge keeping all existing incidents, adding new ones and backfilling metadata.
    Returns (sorted_incidents, added_count, updated_count)."""
    db = {incident['id']: dict(incident) for incident in existing_incidents}

    added = 0
    updated = 0
    for incident in new_incidents:
        incident_id = incident['id']
        if incident_id not in db:
            db[incident_id] = dict(incident)
            added += 1
        else:
            record_changed = False
            # Backfill missing metadata for existing incidents
            for k in ['screenshot', 'url', 'website', 'claim']:
                if (not db[incident_id].get(k)) and incident.get(k):
                    db[incident_id][k] = incident[k]
                    record_changed = True

            # If the OSINT feed updated the claim text specifically, override
            if (
                incident.get('claim')
                and incident['claim'] != db[incident_id].get('claim')
                and "AI generated" not in incident['claim']
            ):
                db[incident_id]['claim'] = incident['claim']
                record_changed = True

            if record_changed:
                updated += 1

    print(f"🔀 Merged {added} new incidents and updated {updated} existing records.")

    # Sort chronologically, newest first
    output = list(db.values())
    output.sort(key=lambda x: x.get('date_discovered', ''), reverse=True)
    return output, added, updated


def merge_data(existing_incidents, new_incidents):
    """Merge keeping all existing, adding new ones, keeping sorted chronologically."""
    output, _, _ = merge_data_with_stats(existing_incidents, new_incidents)
    return output


def _atomic_write_text(filepath, text):
    os.makedirs(os.path.dirname(filepath) or '.', exist_ok=True)
    tmp_path = f"{filepath}.tmp.{os.getpid()}"
    try:
        with open(tmp_path, 'w', encoding='utf-8') as f:
            f.write(text)
        os.replace(tmp_path, filepath)
    finally:
        if os.path.exists(tmp_path):
            try:
                os.remove(tmp_path)
            except OSError:
                pass


def build_recent_preview(
    incidents,
    last_updated=None,
    max_incidents=MAX_RECENT_INCIDENTS,
    max_bytes=MAX_PREVIEW_BYTES,
):
    """Build a browser-facing preview payload guaranteed to serialize under max_bytes (< 50 KB)
    while preserving full archive counts and all display fields on included incidents."""
    total_count = len(incidents)
    timestamp = last_updated or datetime.now().isoformat()

    # Keep chronological order (newest first) without mutating source list
    sorted_incidents = sorted(incidents, key=lambda x: x.get('date_discovered', ''), reverse=True)
    candidate_count = min(max_incidents, total_count)

    def _serialize(items):
        payload = {
            "last_updated": timestamp,
            "total_incidents": total_count,
            "displayed_incidents": len(items),
            "is_preview": True,
            "incidents": items,
        }
        raw = json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
        return payload, raw

    # Start with full unedited incident records, trimming count only if needed to stay under max_bytes
    selected = [dict(inc) for inc in sorted_incidents[:candidate_count]]
    payload, raw = _serialize(selected)

    while len(raw.encode('utf-8')) > max_bytes and len(selected) > 10:
        selected.pop()
        payload, raw = _serialize(selected)

    # Edge-case fallback if even 10 records carry multi-kilobyte claim bodies
    if len(raw.encode('utf-8')) > max_bytes:
        for inc in selected:
            claim = inc.get('claim') or ''
            if len(claim) > 600:
                inc['claim'] = claim[:597].rstrip() + '...'
        payload, raw = _serialize(selected)
        while len(raw.encode('utf-8')) > max_bytes and len(selected) > 1:
            selected.pop()
            payload, raw = _serialize(selected)

    return payload, raw


def save_preview_data(
    incidents,
    last_updated=None,
    preview_path=PREVIEW_PATH,
    max_incidents=MAX_RECENT_INCIDENTS,
    max_bytes=MAX_PREVIEW_BYTES,
):
    """Write data/hacker-chatter-recent.json only when changed (or missing)."""
    payload, raw = build_recent_preview(
        incidents,
        last_updated=last_updated,
        max_incidents=max_incidents,
        max_bytes=max_bytes,
    )

    if os.path.exists(preview_path):
        try:
            with open(preview_path, 'r', encoding='utf-8') as f:
                existing_raw = f.read()
            if existing_raw == raw:
                size_kb = len(raw.encode('utf-8')) / 1024.0
                print(f"ℹ️ Preview {preview_path} unchanged ({payload['displayed_incidents']}/{payload['total_incidents']} incidents, {size_kb:.1f} KB)")
                return False, payload
        except OSError:
            pass

    _atomic_write_text(preview_path, raw)
    size_kb = len(raw.encode('utf-8')) / 1024.0
    print(f"💾 Saved browser preview {preview_path} ({payload['displayed_incidents']}/{payload['total_incidents']} incidents, {size_kb:.1f} KB)")
    return True, payload


def save_data(incidents, data_path=DATA_PATH, last_updated=None):
    timestamp = last_updated or datetime.now().isoformat()
    payload = {
        "last_updated": timestamp,
        "total_incidents": len(incidents),
        "incidents": incidents,
    }
    raw = json.dumps(payload, indent=2, ensure_ascii=False)
    _atomic_write_text(data_path, raw)
    print(f"💾 Saved {len(incidents)} total incidents to {data_path}")
    return timestamp


def main():
    parser = argparse.ArgumentParser(description="Sync Hacker Chatter OSINT archive and browser preview.")
    parser.add_argument(
        '--preview-only',
        action='store_true',
        help='Regenerate data/hacker-chatter-recent.json from existing data/hacker-chatter.json without fetching or modifying source.',
    )
    args = parser.parse_args()

    print("=" * 60)
    print("🕵️  Hacker Chatter DB Sync")
    print("=" * 60)

    existing, existing_last_updated = load_existing_archive()
    print(f"📂 Found {len(existing)} incidents archived in DB.")

    if args.preview_only:
        if not existing:
            print("⚠️ No archived incidents found; cannot build preview.")
            return
        save_preview_data(existing, last_updated=existing_last_updated)
        print("=" * 60)
        return

    new_incidents = fetch_incident_feed()

    if new_incidents:
        final_db, added, updated = merge_data_with_stats(existing, new_incidents)
        if added > 0 or updated > 0 or not os.path.exists(DATA_PATH):
            saved_ts = save_data(final_db)
            save_preview_data(final_db, last_updated=saved_ts)
        else:
            print("ℹ️ Source archive unchanged (0 new, 0 updated); skipping 21 MB source rewrite.")
            save_preview_data(existing, last_updated=existing_last_updated)
    else:
        print("⚠️ No new incidents fetched; keeping existing archive intact.")
        if existing and not os.path.exists(PREVIEW_PATH):
            save_preview_data(existing, last_updated=existing_last_updated)

    print("=" * 60)


if __name__ == "__main__":
    main()
