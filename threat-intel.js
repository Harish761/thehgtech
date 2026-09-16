// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-17T01:01:07.412390+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-17T01:01:07.042152+05:30",
    "lastUpdatedFormatted": "Sep 17, 2026 at 01:01 AM IST",
    "comparisonPeriod": "Sep 16 \u2013 Sep 17, 2026",
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
                "hxxps://schtrekh[.]de/img/",
                "hxxp://www[.]900599[.]cc/",
                "hxxps://farren[.]webdesignla[.]info/ga/click/2-115159033-1585-17249-33739-18616-2212d2c02a-1b10dc49b9",
                "hxxps://brayden-15[.]pages[.]dev/",
                "hxxps://ch-pak-informations[.]bolt[.]host/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1624,
                "newInLastHour": 166,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"62b2d643e28c3310427f78372f98b54f9c6ac97502fdab69c61d8a2d34fe7755",
                " \"1e92a69fa5d92f9244347d05f32c27b95c9355277c659627c5c4b404fcdf6269",
                " \"1b6c1a783f2aada8ce97dfafb675bc2376bf1700a066681668fc89decca1e5af",
                " \"2f98a14a0acb19957e7c55647f337b5a1d1c1ef2307423801e2874ba1550cf38",
                " \"1d25cf1b14e918c0d6922d30f3b5766424c64a2965c220ab89d909e10aace891"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1713,
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
                "1[.]10[.]172[.]57",
                "1[.]117[.]59[.]169",
                "1[.]14[.]96[.]105",
                "1[.]15[.]14[.]29",
                "1[.]20[.]174[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4701,
                "newInLastHour": 4701,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]20[.]82[.]225",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13207,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13207,
                "newInLastHour": 13207,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://171[.]36[.]18[.]157:35519/i",
                "hxxp://125[.]46[.]198[.]87:41297/i",
                "hxxp://216[.]126[.]86[.]6:57863/i",
                "hxxp://125[.]46[.]198[.]87:41297/bin[.]sh",
                "hxxp://124[.]158[.]191[.]121:53328/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7659,
                "newInLastHour": 6483,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]statically[.]io/gh/19875567137/1267216556227698235249@main/B89737793262FB-01\"",
                " \"107[.]148[.]78[.]97:8443\"",
                " \"114[.]215[.]188[.]153:888\"",
                " \"139[.]196[.]174[.]152:83\"",
                " \"102[.]220[.]163[.]36:8808\""
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
            "iocCount": 10681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10681,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
                "c3e6df2402e57af3e0b7c66f8282efec4a387ac6",
                "ba3714d484afb75fd03911c59aa096cee9595955",
                "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                "46b898af8e29cb2fe186de2bfdf60bc01d617720"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51281,
            "activeSources": 8,
            "criticalAlerts": 25498,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14815,
                "trend": "stable",
                "percentage": 7
            },
            {
                "category": "C2",
                "count": 10683,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4758,
                "trend": "down",
                "percentage": -12
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
                    "1[.]10[.]172[.]57",
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "malware_download",
                "count": 13143,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://windowsdiagnostics[.]st/api/static/exodus[.]asar",
                    "hxxps://windowsdiagnostics[.]st/api/static/Office365",
                    "hxxps://windowsdiagnostics[.]st/api/static/svhost"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1713,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]243[.]191[.]83:88\"",
                    " \"144[.]225[.]246[.]14:80\"",
                    " \"144[.]225[.]246[.]14:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1356,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"9109d9bd117f540aed9afa6f293c1396cc18ed979056eadca97c69e3f957c14d\"",
                    " \"f6f7dbd6561e7ee6ba7e6abffdb1e5de01bf511318aade34825d888e99db645f\"",
                    " \"217[.]60[.]76[.]250:7707\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1205,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]snmechanicalhvac[.]com\"",
                    " \"www[.]teczkibezkwasowe[.]com\"",
                    " \"www[.]weilaizhijiao[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1065,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"afd47ef7378e573c8e575b2030355a2b65a888bdaf56c00a1e6f8e5dc980e7e5\"",
                    " \"1a0c3d520e16ae12ffa918032e608f573b716f009a05c35f64b53f128bf7376d\"",
                    " \"28f83470b477e89081c08772af0470c6e841cc01c6bef4472f3b8eed47f852ce\""
                ]
            },
            {
                "name": "Vidar",
                "count": 779,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09"
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
        "totalAttacksThisHour": 39873,
        "lastCalculated": "2026-09-17 01:01 IST"
    }
};
