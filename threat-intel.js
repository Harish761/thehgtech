// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-11-28T01:54:03.585856+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-11-28T01:54:03.555779+05:30",
    "lastUpdatedFormatted": "Nov 28, 2025 at 01:54 AM IST",
    "comparisonPeriod": "Nov 27 \u2013 Nov 28, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://gimmenilogin[.]gitbook[.]io/",
                "hxxps://rij[.]rim[.]mybluehost[.]me/website_68f00201/cor/correos%20(3)/correos/qZWN0cy90YWxh/c993ggc/msg[.]php",
                "hxxps://e[.]vg/hsqPRwdZY",
                "hxxps://coinbasenvprologin[.]webflow[.]io/",
                "hxxps://infodigitalemaintenance[.]web[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 627,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 627,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"31b621fca2f7404e28d983f34a8f5acb87ee630429f988f37c69e622b3c4a34e",
                " \"37a93478c75770fd1ad5543ce880376a593fcc7a2abf0858ad70ecc768f24abb",
                " \"16c85ccbc4bd049f6d77c4be926f9b29da03bdbf8da753336242cf802110161e",
                " \"b55068d60321e1174fed89ba5182eb8c1f64203baed5cc725e4961833f59a119",
                " \"0b09202817c1f89d42a2d88ede4a2ebc402b64c32ed50bd763bb9cdd1a95de48"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1458,
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
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]176[.]58",
                "1[.]119[.]194[.]226",
                "1[.]13[.]197[.]76",
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5465,
                "newInLastHour": 5465,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]15[.]114[.]102",
                "1[.]161[.]60[.]50",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28936,
                "newInLastHour": 28936,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]22[.]44[.]2:49783/bin[.]sh",
                "hxxp://120[.]28[.]138[.]11:34927/i",
                "hxxp://182[.]121[.]116[.]145:35344/bin[.]sh",
                "hxxp://110[.]37[.]91[.]7:39193/bin[.]sh",
                "hxxp://110[.]36[.]0[.]172:43707/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1361,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1361,
                "newInLastHour": 1192,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"spark7[.]mistlake[.]ru\"",
                " \"gty6[.]stonem1nt[.]ru\"",
                " \"p81s[.]stonem1nt[.]ru\"",
                " \"193[.]242[.]184[.]136:80\"",
                " \"106[.]13[.]86[.]178:8080\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8522,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f30a84e5e4404701c9cdf35dc9f041e9387dd669",
                "12b35a8ec2b2eeeeca8cd423572a2a1e03325bdb",
                "76058b8a13d3e0cc6d94719bca231ed307fef2db",
                "f25d97c413b79f8d2d7b82743796e4de8e0fc734",
                "714be1c77064ad12980b7854e66377d442ed7e1d"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50901,
        "lastCalculated": "2025-11-28 01:54 IST"
    }
};
