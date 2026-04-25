// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-25T22:27:54.073674+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-25T22:27:53.728181+05:30",
    "lastUpdatedFormatted": "Apr 25, 2026 at 10:27 PM IST",
    "comparisonPeriod": "Apr 24 \u2013 Apr 25, 2026",
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
                "hxxps://netcoin-aap[.]zapier[.]app/",
                "hxxp://prajasa[.]com/",
                "hxxp://tr[.]galabettresmiadres[.]vip/",
                "hxxp://tr[.]galabetresmiiadresi[.]vip/",
                "hxxp://tr[.]adres-galabet2026[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 859,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 859,
                "newInLastHour": 157,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6a3b8e012d6c2870297663c90ef7d69636a167b1ebd12fb7f1d7521a32f7f1f8",
                " \"256f984e4266bf6c665b53ee057b023d0bdcf0f546a4e050ab77c32ab48f27f8",
                " \"e9936495b7ee77fab7e33c04d6a73c33370e0e5502f394a371c34deee8745833",
                " \"7b4e88ec91b89c661bcf5e77465d9d4f1ca6399118d8947c6ff0da7456de1d5a",
                " \"7a64a0b0bdc4d814427eb3ecfdb6d1e1ddee0cbb62e2742b754b1c6b1527f52e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1591,
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
                "1[.]1[.]140[.]136",
                "1[.]120[.]3[.]95",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158",
                "1[.]183[.]41[.]171"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 30288,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 30288,
                "newInLastHour": 30288,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]143[.]115",
                "1[.]0[.]143[.]71",
                "1[.]0[.]164[.]165",
                "1[.]0[.]215[.]59",
                "1[.]10[.]141[.]248"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26339,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26339,
                "newInLastHour": 26339,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]217[.]23[.]140:41366/i",
                "hxxp://182[.]126[.]116[.]146:37115/bin[.]sh",
                "hxxp://117[.]217[.]23[.]140:41366/bin[.]sh",
                "hxxp://42[.]226[.]67[.]85:59331/i",
                "hxxps://www[.]italiaregina[.]it/wp-content/plugins/oAjtOHvn[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 890,
                "newInLastHour": 886,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kchjc5x[.]pav3lorex[.]in[.]net\"",
                " \"wave-netw[.]pav3lorex[.]in[.]net\"",
                " \"cp52[.]pav3lorex[.]in[.]net\"",
                " \"bundle-sheet[.]nov7liren[.]in[.]net\"",
                " \"landing[.]anticalcareposeidon[.]it\""
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
            "iocCount": 9638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9638,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d",
                "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                "513656d150a201936049c3d3ff4f1c6efb7a8cc7",
                "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                "ea714daf2e106b7297763178ab7c6e38753ac5bd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54175,
            "activeSources": 8,
            "criticalAlerts": 36441,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26837,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9604,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 147,
                "trend": "stable",
                "percentage": -7
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
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
                "name": "malware_download",
                "count": 26078,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]119[.]134:38587/i",
                    "hxxp://42[.]228[.]41[.]142:43689/bin[.]sh",
                    "hxxp://37[.]26[.]85[.]56:53461/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]1[.]140[.]136",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1591,
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
                "name": "AsyncRAT",
                "count": 1408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
            },
            {
                "name": "QuasarRAT",
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 513,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87"
                ]
            },
            {
                "name": "OffLoader",
                "count": 401,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 368,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tr4ck7-plate[.]zex3liron[.]in[.]net\"",
                    " \"quorforgeet6[.]zex3liron[.]in[.]net\"",
                    " \"4wjh4hoo[.]qiv9moren[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 72987,
        "lastCalculated": "2026-04-25 22:27 IST"
    }
};
