// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-10T03:58:23.791663+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-10T03:58:23.419523+05:30",
    "lastUpdatedFormatted": "Sep 10, 2026 at 03:58 AM IST",
    "comparisonPeriod": "Sep 09 \u2013 Sep 10, 2026",
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
                "hxxps://www[.]facebooklogin21[.]blogspot[.]com/",
                "hxxps://ledgrr-live-io-faq[.]pages[.]dev/",
                "hxxp://ledgrr--live[.]pages[.]dev/",
                "hxxp://ledgrr-livv-app[.]pages[.]dev/",
                "hxxps://ledgrr-iolive[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 799,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4140ab818a346c10283f42da5f77fe275178123300c739cc260bd6f294dee055",
                " \"2d4c0d148b5348f56d85dd86b1e669284b82b67a1ba6a6d9f313b4e1044beb24",
                " \"51da755fef7869159723b7022476e129db585ccc643e25cc96de070838b9f66b",
                " \"25443ccdf2ed0da0d14bda3f9160e6adeebd4b7d9e947bdca8c990a45595122d",
                " \"f5909238ccb916af6b8260268318f58aee16961d42699521de049f18f0743787"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]227[.]58",
                "1[.]181[.]200[.]22"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5096,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5096,
                "newInLastHour": 5096,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14136,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14136,
                "newInLastHour": 14136,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]184[.]180[.]148:36857/bin[.]sh",
                "hxxp://182[.]118[.]244[.]134:34417/i",
                "hxxp://115[.]230[.]76[.]101:37221/i",
                "hxxp://38[.]75[.]202[.]173:44405/i",
                "hxxp://182[.]112[.]182[.]6:41117/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9502,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9502,
                "newInLastHour": 9265,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]kolhofgut[.]com\"",
                " \"felice979[.]workers[.]dev\"",
                " \"83[.]229[.]123[.]249:22\"",
                " \"83[.]229[.]123[.]249:8081\"",
                " \"gyvola[.]workers[.]dev\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 10629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10629,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f350973861d149efb83b0a1f51d0e0db0329dda",
                "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
                "559a55c8c7779e0037429794a8836a1039dbcdc3",
                "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52069,
            "activeSources": 8,
            "criticalAlerts": 25574,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15019,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10555,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4169,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 14129,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]118[.]244[.]134:34417/bin[.]sh",
                    "hxxp://113[.]238[.]99[.]109:46495/bin[.]sh",
                    "hxxp://210[.]208[.]111[.]234:49349/bin[.]sh"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1975,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bitfundedxcryptobanter[.]com\"",
                    " \"butecoemcasacampinas[.]com[.]br\"",
                    " \"clinicaveterinarialescampes[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1695,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "1.10.16.0/20",
                    "1.19.0.0/16",
                    "1.32.128.0/18"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]abelmomaroc[.]com\"",
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"152[.]136[.]253[.]101:111\"",
                    " \"120[.]77[.]254[.]122:8888\"",
                    " \"120[.]77[.]254[.]122:22\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 988,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"easiera[.]wasmer[.]app\"",
                    " \"levelprodukcija[.]com\"",
                    " \"tj6oqmj6[.]creditrepairhacking[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 737,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405",
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97"
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "550e1cde5c59d03b6f3b9bd3ebfc4af6c7dbec48",
                    "38ecc7c543c90d25571eae05fbd1948a310761b7",
                    "6c1cd5f3b4f1a6da97a199397b1bae8226aac7bc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 43920,
        "lastCalculated": "2026-09-10 03:58 IST"
    }
};
