# GRC Engine Upgrade — Cross-Conversation Handoff
**Created:** 2026-04-22 | **Conversation:** 3579de8e-ce43-4f74-9fb2-36a3f4ac9bba

---

## 📁 Key File Locations

| File | Path | Purpose |
|---|---|---|
| Main HTML | `/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/index.html` | UI shell, all 3 views |
| Engine JS | `/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/grc-engine.js` | All logic — scoring, dashboard, exports |
| Data/KB | `/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/grc-data.js` | 93 ISO 27001 Annex A controls as JSON |
| Engine CSS | `/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/grc-engine.css` | All styles |
| Modal CSS | `/Volumes/Data-Personal/Webpage/thehgtech/tools/grc-assessment/modal.css` | Modal styles |

---

## 🧠 What the Tool Currently Does (v2.0)

- **3-Phase flow:** Scope Selection → Assessment Engine → Dashboard
- **93 ISO 27001:2022 Annex A controls** across 4 domains (5, 6, 7, 8)
- **CMMI-inspired maturity scale:** Yes / Optimized / Managed / Defined / Repeatable / Ad Hoc / No / N/A
- **Triple framework scoring:** ISO 27001 + NIST CSF 2.0 + CIS Controls v8
- **Industry presets:** SaaS, Healthcare, Financial, Government, Essential Only
- **Dashboard:** Radar chart (Chart.js), Risk Heatmap, 90-Day Timeline, Priority Action Plan
- **Exports:** Excel SoA (SheetJS), PDF Report (pdfMake), JSON export
- **Persistence:** localStorage auto-save + URL state sharing
- **Evidence notes** textarea per control
- **N/A justification** per control
- **Keyboard shortcuts:** 1/2/3/4 for answers, J/K for navigation

---

## 📋 15-Gap Roadmap (Identified 2026-04-22)

### 🔴 Phase 1 — CRITICAL (Do This First — Makes Tool Audit-Valid)

#### [1] Domain 0: ISO 27001 Clauses 4–10 — NOT YET BUILT
> **This was planned in the previous conversation (ae87c228) but never implemented.**

Add a new domain `domain_0` to `grc-data.js` BEFORE the existing 4 domains. It must be:
- **Pre-selected and locked** (checkbox `disabled`) in scope selection
- Labeled `"MANDATORY — ISO Management System Requirements"`
- Contains 10–12 original questions covering:
  - Clause 4.1–4.4: Context & Scope (Has the org defined ISMS boundaries?)
  - Clause 5.1–5.3: Leadership & Policy (Is there an exec-signed IS Policy?)
  - Clause 6.1–6.3: Planning & Risk (Is there a formal risk methodology?)
  - Clause 7.1–7.5: Support & Resources (Are resources allocated?)
  - Clause 8.1–8.3: Operational Planning (Are risk assessments being run?)
  - Clause 9.1–9.3: Performance Evaluation (Are internal audits conducted?)
  - Clause 10.1–10.2: Improvement (Is there an NC/corrective action process?)
- Clause failures (score < Defined level) must trigger a 🚨 banner: **"MAJOR GAP: Certification is blocked until Clause gaps are resolved."**
- These map primarily to NIST CSF 2.0 `GV.*` (Govern) and `ID.*` (Identify) functions

Schema to add to `grc-data.js`:
```javascript
{
  "id": "domain_0",
  "name": "Management System Requirements (Clauses 4–10)",
  "icon": "fa-landmark",
  "isMandatory": true,
  "description": "The mandatory governance backbone of ISO 27001:2022. These clauses evaluate the ISMS itself — not individual controls. Failure here results in a Major Non-Conformity that blocks certification.",
  "controls": [
    // 10-12 controls with control_id like "CL4.1", "CL5.1" etc.
  ]
}
```

#### [8] Scoring Anomaly Fix
- **Bug:** Unanswered controls are excluded from the denominator. A user who answers 5/93 controls with "Yes" gets 100% ISO score.
- **Fix:** Add two scoring modes:
  - "Scoped Score" = current logic (only answered controls)
  - "Full Scope Score" = all selected controls in denominator (unanswered = 0 impact)
- Show BOTH scores on the dashboard clearly. "Full Scope Score" should be the primary displayed score.

#### [9] Certification Readiness Verdict
Add a panel to the dashboard (above the radar chart):
- **🔴 Major Non-Conformities (MNCs):** Count of High-criticality controls at "No" — these auto-fail Stage 1 audit
- **🟡 Minor Non-Conformities:** Count of High-criticality controls at "Ad Hoc" or "Repeatable"
- **🟢 Observations:** Defined/Managed controls that need uplift
- A final verdict: `"NOT READY FOR STAGE 1 AUDIT"` / `"BORDERLINE — Resolve MNCs"` / `"STAGE 1 READY"`

#### [3] Audit-Valid SoA Export
Current Excel export is missing key SoA columns. The Excel output must add:
- Column: "Justification for Inclusion" (why this control is applicable)
- Column: "Justification for Exclusion" (only for N/A controls — currently has this as `_just`)
- Column: "Treatment Reference" (links to Risk Treatment Plan — can be blank for now)
- Column: "Assessment Date"
- Row at top: Version number, Organisation Name, Assessor Name, Date

---

### 🟠 Phase 2 — HIGH PRIORITY (Makes It a Real GRC Tool)

#### [2] Risk Register & Risk Treatment Plan Module
- 4th view: "Risk Register"
- Each identified gap auto-populates as a risk entry
- User selects Treatment: Accept / Mitigate / Transfer / Avoid
- PDF/Excel export generates a formal Risk Treatment Plan document

#### [4] Structured Evidence Logging
- Replace the free-text Evidence Notes textarea with a structured form:
  `{ document_name, version, date_reviewed, owner, type: [Policy/Procedure/Technical Config/Record] }`
- Add a "Verification Status": Self-Assessed / Internally Verified / Externally Audited

#### [10] Remediation Task Tracker
- Each gap item in the dashboard gets: `[ ] Owner | [ ] Due Date | [ ] Mark Resolved`
- Store in localStorage
- Dashboard shows a separate "Remediation Progress" bar (% of gaps marked resolved)

#### [15] Welcome Back Session Recovery UI
- On load, if localStorage has a previous session, show a banner:
  `"Welcome back! Last assessment: [date] | Score: [X]% | Resume or Start Fresh?"`

---

### 🟡 Phase 3 — UI EXCELLENCE (Premium Feel)

#### [11] Question Card UX Overhaul
- Add toggle: "One at a time" vs "Show all" mode
- Default to one-at-a-time (wizard style with progress)
- Add colored dots in sidebar nav for answer status per domain

#### [12] Dashboard Visual Upgrades
- Animate score counter from 0 to final (odometer effect on load)
- Add "Top 3 Strongest Controls" section (positive reinforcement)
- Add industry benchmark ghost ring on radar chart
- Dynamic framework divergence text based on actual score deltas

#### [13] Scope Selection Polish
- Domain cards show mini progress bar when returning with data
- Domain 0 card has a full-width "MANDATORY" banner with lock icon
- Active preset buttons persist visual selected state

#### [14] Sidebar Color Coding
- Nav items: Green dot if 100%, Amber if >50%, Red if <50%, Grey if untouched
- Scores (ISO/NIST/CIS) pulse/flash on change

#### [7] Historical Trend Line Chart
- Replace the "Progress Tracker" card with a Chart.js line chart
- Show ISO, NIST, CIS trend lines separately across all stored history entries
- Keep up to 12 entries (not 5)

---

### ⚪ Phase 4 — EXPANSION

#### [6] Additional Framework Crosswalks
- Add `gdpr_mapping`, `soc2_mapping`, `pci_mapping` fields to `grc-data.js`
- Show as additional badge rows on each control card
- Add GDPR/SOC2/PCI scores to the dashboard

#### [5] JSON Import for Multi-User Merge
- "Import Assessment" button that accepts the JSON export
- Merges responses with existing state (later entry wins for conflicts)
- Allows team-based assessment without a backend

---

## ✅ How to Continue in a New Chat

Tell the agent:
> "I'm working on upgrading the GRC tool at TheHGTech. Read the handoff file at `/Volumes/Data-Personal/Webpage/thehgtech/GRC_ENGINE_UPGRADE_HANDOFF.md` and implement **Phase 1**."

The agent will then:
1. Read this file
2. Read the current state of the 3 key files (`grc-data.js`, `grc-engine.js`, `index.html`)
3. Implement Phase 1 changes as specified above

---

## 🔑 Important Code Context

### MATURITY_LEVELS (grc-engine.js line 11–20)
```javascript
const MATURITY_LEVELS = {
    'yes':       { multiplier: 1.0, color: '#10B981' },
    'optimized': { multiplier: 1.0, color: '#10B981' },
    'managed':   { multiplier: 0.8, color: '#34D399' },
    'defined':   { multiplier: 0.6, color: '#FBBF24' },
    'repeatable':{ multiplier: 0.4, color: '#F59E0B' },
    'adhoc':     { multiplier: 0.2, color: '#EF4444' },
    'no':        { multiplier: 0.0, color: '#EF4444' },
    'na':        { multiplier: null, color: '#6B7280' }
};
```

### Storage Keys
```javascript
STORAGE_KEY  = 'thehgtech_grc_state_v2'   // User answers
HISTORY_KEY  = 'thehgtech_grc_history_v2' // Score history
```

### Domain IDs in grc-data.js
- `domain_5` → ISO Domain 5: Organizational Controls
- `domain_6` → ISO Domain 6: People Controls
- `domain_7` → ISO Domain 7: Physical Controls
- `domain_8` → ISO Domain 8: Technological Controls
- `domain_0` → **TO BE ADDED** — Clauses 4–10

### Design Tokens (from grc-engine.css)
- Accent Cyan: `#00D9FF` / `var(--accent-cyan)`
- Accent Purple: `#8B5CF6` / `var(--accent-purple)`
- Accent Green: `#10B981` / `var(--accent-green)`
- Danger: `#EF4444`
- Warning: `#F59E0B`
- Background: `var(--bg-dark)`, `var(--bg-card)`
- Fonts: `Outfit` (headings), `Inter` (body), `JetBrains Mono` (code/scores)
