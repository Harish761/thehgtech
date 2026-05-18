// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-19T02:51:35.162196+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-19T02:51:34.791798+05:30",
    "lastUpdatedFormatted": "May 19, 2026 at 02:51 AM IST",
    "comparisonPeriod": "May 18 \u2013 May 19, 2026",
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
                "hxxps://pedagiodigital-flow[.]com/vias/home[.]php",
                "hxxps://meta-id90013[.]agency-manager-support[.]com/",
                "hxxp://www[.]pcn-noticea[.]top/com/",
                "hxxp://www[.]pcn-noticra[.]top/com/",
                "hxxps://tiktokvc-1330623827[.]pichk[.]myqcloud[.]com/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 609,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"976c17bb7dcbfa6dff7c54fa98cb9bc85d18daa7af8e8e9462310ee42b401dd1",
                " \"8efda310e1548c396caa8fe3e31168c386215e880ac3000b57047643d2702f25",
                " \"4ce59c09ab83c0749e14581b0ee359456d149c882093457764d368401cebbbb3",
                " \"f7c8a872c7d456c761ab679fd30a05f32d0c5991e0eceb9418a6d03a23af853c",
                " \"59101c3e0cdf4e2a14b4dd574b9bf1f3864df6dd5984e9f14d3071c286400657"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
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
                "1[.]13[.]250[.]55",
                "1[.]15[.]14[.]29",
                "1[.]156[.]141[.]253",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5547,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5547,
                "newInLastHour": 5547,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]225[.]185",
                "1[.]205[.]204[.]213",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24943,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24943,
                "newInLastHour": 24943,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://containerizedgardenhub[.]garden/00802650-7147-4392-b474-28e4506a37ca/google[.]cl",
                "hxxp://219[.]157[.]48[.]149:37122/i",
                "hxxps://8qxg5lyp[.]logic-pulse[.]digital/?ublib=e7282688-6ce3-460b-98b1-b1eabb2fb575",
                "hxxp://110[.]36[.]28[.]230:54129/bin[.]sh",
                "hxxps://floraautomationnetwork[.]garden/9a9d9159-edc6-4993-9ece-89288f96bdf9/google[.]cl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3273,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3273,
                "newInLastHour": 3266,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"containerizedgardenhub[.]garden\"",
                " \"8qxg5lyp[.]logic-pulse[.]digital\"",
                " \"b3gl3j28[.]logic-pulse[.]digital\"",
                " \"logic-pulse[.]digital\"",
                " \"floraautomationnetwork[.]garden\""
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
            "iocCount": 9712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9712,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dc56ac0921f789585377f19e9ef12cfa1bc0d6c2",
                "4f391f6181ed04bbb503adffee6259ed57353749",
                "c4af518b550a6b1489d87ac39e317e3c16f1f7a7",
                "c470e636bbf2e111e32699330bfe98e82e932c72",
                "39f3abca4d940c79c7effc9800ee64f7776c3075"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55481,
            "activeSources": 8,
            "criticalAlerts": 35281,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25582,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9699,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2967,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
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
                "count": 24931,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]203[.]182[.]4:49995/i",
                    "hxxps://irrigationworkflowsystem[.]garden/0a0248a6-256c-4e57-9f7f-bd24961098f9/google[.]cl",
                    "hxxps://14[.]46[.]136[.]77/aarch64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]13[.]250[.]55",
                    "1[.]15[.]14[.]29",
                    "1[.]156[.]141[.]253"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1628,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1472,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]14[.]248[.]199:8080\"",
                    " \"27[.]124[.]19[.]53:80\"",
                    " \"178[.]154[.]206[.]48:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a",
                    "fa2598910f8313798f8ee2fbfe84668b718442b6",
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd"
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
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
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
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            },
            {
                "name": "OffLoader",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4f391f6181ed04bbb503adffee6259ed57353749",
                    "c4af518b550a6b1489d87ac39e317e3c16f1f7a7",
                    "c470e636bbf2e111e32699330bfe98e82e932c72"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49072,
        "lastCalculated": "2026-05-19 02:51 IST"
    }
};
