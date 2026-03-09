# LinkedIn Post: MuddyWater Iran APT US Targets

## 📅 Created: March 9, 2026

---

## 📝 MAIN POST (Copy this)

```
Nation-state cyber warfare rarely announces itself.

But Iran's most active cyber espionage group just escalated their targeting of US critical infrastructure.

The Broadcom Symantec Threat Hunter Team has identified a highly sophisticated campaign by MuddyWater (an APT formally linked to Iran's Ministry of Intelligence and Security - MOIS).

Their targets?
🏢 US Banks
✈️ US Airports
🛡️ High-profile Defense Contractors

What makes this campaign dangerous isn't just WHO they are targeting, but HOW they are evading detection.

MuddyWater has abandoned their old toolset and deployed two previously unseen, custom backdoors:

1️⃣ DINDOOR
A backdoor completely written in the Deno JavaScript runtime environment. This is a brilliant "Bring Your Own Runtime" (BYOR) evasion tactic. Traditional AV and EDR solutions frequently miss Deno-based execution, allowing the malware to blend in seamlessly.

2️⃣ FAKESET
A heavily obfuscated Python backdoor tailored for persistence and rapid execution. 

Both tools are being signed with stolen or fraudulently acquired certificates ("Amy Cherne" and "Donald Gay") to bypass Windows SmartScreen and Mark-of-the-Web defenses.

Once inside, they move laterally, establish persistence, and use Rclone to quietly exfiltrate massive amounts of sensitive data to Wasabi cloud storage infrastructure. 

Crucially: Threat intel suggests this access was pre-positioned *before* the recent military strikes involving Iran, indicating a long-term strategic cyber warfare capability rather than an impulsive retaliation.

If you handle security for financial services, aviation, or defense — this is a threat group you must actively hunt for in your telemetry TODAY.

The game is changing. Nation-states are adopting "Bring Your Own Runtime" malware to stay invisible. 

Full technical analysis, tactics, and indicators of compromise (IOCs) are linked in the comments 👇

#CyberSecurity #ThreatIntelligence #MuddyWater #NationState #InfoSec #CyberWarfare #CriticalInfrastructure #APT #CyberDefense
```

---

## 💬 FIRST COMMENT (Post immediately after main post)

```
📎 Read the full intelligence analysis: https://thehgtech.com/articles/muddywater-iran-us-banks-airports-2026.html

Inside the briefing:
→ Deep dive into Dindoor's Deno-based BYOR evasion mechanics
→ Analysis of Fakeset's python execution paths
→ Details on the stolen code-signing certificates used
→ How they abuse Rclone for data exfiltration
→ Strategic timeline of the attacks

Share this with your Threat Intel and SOC teams. 🛡️
```

---

## 💬 SECOND COMMENT (Optional - engagement driver)

```
The use of Deno (a modern JavaScript/TypeScript runtime) as a malicious runtime environment for the Dindoor backdoor is a fascinating evolution in evading traditional EDR.

Are you actively hunting for unauthorized or unexpected runtimes (like Deno, Node, Python portable) executing in your environment? Or is your focus primarily on LOLBINS?
```

---

## 📅 POSTING STRATEGY

### Best Time
- **Tuesday-Thursday (8 AM or 12 PM)** — Threat intel content performs well during core business hours when security leaders are reviewing news.

### Engagement Strategy
1. Post main content with the provided image
2. IMMEDIATELY add first comment with article link
3. Tag relevant threat intel professionals or groups if applicable
4. Respond to comments regarding BYOR evasion tactics

## 📁 Files Location
`/linkedin-carousels/muddywater-us-banks-2026/`
- Image: `linkedin_muddywater_iran.png`
