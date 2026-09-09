// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-10T00:44:35.412763+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-10T00:44:35.063519+05:30",
    "lastUpdatedFormatted": "Sep 10, 2026 at 12:44 AM IST",
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
            "iocCount": 929,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 929,
                "newInLastHour": 256,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d49785f0195374536fa826a9f2228da105b80fa7bff5d8bee24c7260c665a09e",
                " \"ff394679232be326f86b65908b12b230af7e9e54884224774c657f8bdf138c7a",
                " \"6850a9d2b84bf20f741bf21af7476307220544cae9f6c0e67ce344d2784193e8",
                " \"8398bb1657184bf9b9cb3da1ec43eb4db939066317920514c659e59c3af7fda1",
                " \"74def0e4ad75c75aab47de583d29deaabdf7e02491e78945afeed9a4788b599a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
                "newInLastHour": 1,
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
                "1[.]15[.]227[.]58",
                "1[.]181[.]200[.]22",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5170,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5170,
                "newInLastHour": 5170,
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
            "iocCount": 14125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14125,
                "newInLastHour": 14125,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://globalsupportupdate[.]top/enc[.]exe",
                "hxxp://115[.]50[.]7[.]192:56498/bin[.]sh",
                "hxxp://36[.]70[.]111[.]17:52592/i",
                "hxxp://105[.]225[.]100[.]208:33755/bin[.]sh",
                "hxxps://drive[.]google[.]com/uc?export=download&id=1vGK7VwXP5gMMSm47LY8cn6Jw4bf8tFOp"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9229,
                "newInLastHour": 8995,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"152[.]32[.]133[.]192:5985\"",
                " \"152[.]32[.]133[.]192:7500\"",
                " \"152[.]32[.]133[.]192:60000\"",
                " \"152[.]32[.]133[.]192:8080\"",
                " \"8[.]147[.]114[.]203:443\""
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
            "iocCount": 10678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10678,
                "newInLastHour": 34,
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
            "totalIndicators": 51559,
            "activeSources": 8,
            "criticalAlerts": 25415,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14793,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10622,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4132,
                "trend": "stable",
                "percentage": -1
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
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 13981,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://37[.]112[.]51[.]183:39000/i",
                    "hxxp://27[.]222[.]243[.]52:39549/bin[.]sh",
                    "hxxp://61[.]54[.]173[.]114:56222/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1968,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"foldstation[.]cfd\"",
                    " \"fleshproduce[.]xyz\"",
                    " \"goldenseatnwa[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1707,
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
                "count": 1587,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\"",
                    " \"ialphai[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1301,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5[.]206[.]227[.]107:111\"",
                    " \"152[.]136[.]253[.]101:8888\"",
                    " \"5[.]206[.]227[.]107:5198\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 931,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yi4ip7ew[.]everythingisephemere[.]com\"",
                    " \"everythingisephemere[.]com\"",
                    " \"coolify-api[.]eaglegpt[.]ai\""
                ]
            },
            {
                "name": "Vidar",
                "count": 771,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43886,
        "lastCalculated": "2026-09-10 00:44 IST"
    }
};
