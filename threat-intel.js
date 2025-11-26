// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-26T07:03:18.843874+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de
// NOTE: Full IOC lists are stored in Cloudflare R2 and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-26T07:03:18.838068+05:30",
    "lastUpdatedFormatted": "Nov 26, 2025 at 07:03 AM IST",
    "comparisonPeriod": "Nov 25 \u2013 Nov 26, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "r2Url": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://creditosbancopromerica[.]netlify[.]app/",
                "hxxps://humanresourcesportal4678fhnbt476gh894790[.]yochaise[.]ru/b8QCdbHP@tqsxjl4ICoW2V/",
                "hxxps://kind-phone-898968[.]framer[.]app/",
                "hxxp://fin[.]tedfullwood[.]com/sitemap/",
                "hxxps://www[.]e-compliants[.]com/?urid=A715lTXpTd36keivfADGihARphERk6ZAVuCU_LTn_GF3lQ17TBxJBf0nSUAKOmOSiTwgdcqc-iVPZnO0VaHIbJGL3fjNApfwqNDc_BTFdZnIkVuE6RGJE3OmSj5w-EhEaRqeI_EZiSKzdO8hz&rg=WEU"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 722,
            "r2Url": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 722,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"36d267bd234cbe7df384898f70359ef05e788816255fb4407010af286563acb6",
                " \"eccb019921b7af663a9ef9458fdea8d4bf54093d36f40f330772ded65bb2d677",
                " \"b5e4698ed78886e5420ceec015dc019d69de709c2da10f0d8fc4a5d27059cd30",
                " \"84385caed511a464ca62fb72080d0cf723d2ffa636d9c9ee865c7284a69758f0",
                " \"4b0e44c1004afe3251e6bb11e10e07e98a019acdc13ee0141ef04cc9bdb07a18"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1449,
            "r2Url": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1449,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 15000,
            "r2Url": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]180[.]98",
                "1[.]13[.]197[.]76",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205",
                "1[.]172[.]234[.]138"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4983,
            "r2Url": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4983,
                "newInLastHour": 4983,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]100[.]2",
                "1[.]161[.]60[.]50",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]221[.]66[.]66"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 0,
            "activeSources": 0,
            "criticalAlerts": 0,
            "activeCampaigns": 0
        },
        "topThreats": [
            {
                "category": "Phishing",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 0,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [],
        "campaigns": []
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 20324,
        "lastCalculated": "2025-11-26 07:03 IST"
    }
};
