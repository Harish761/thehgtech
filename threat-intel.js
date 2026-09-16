// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-17T03:04:14.634660+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-17T03:04:14.276826+05:30",
    "lastUpdatedFormatted": "Sep 17, 2026 at 03:04 AM IST",
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
            "iocCount": 1651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1651,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ef1c7270096b4d0dffb394d09416320d12aa24b9d9b70f89998d90e42ac63098",
                " \"277b73d7981302c0da84c9656c8c5e132929d433aa8485b288ba7c5397b4b469",
                " \"06a18fc06425111a95fc85c16ff679538a66c9fed00c059261856c519cb1ad73",
                " \"d9f3c46beb0cd04099b6af230298b90b972fdd228ec4c568d6908574cd9e9125",
                " \"9343a5975b561928230fdd0593a5dde46675ea6074e0d7208bb3ba038d0e5e66"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1714,
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
                "1[.]12[.]56[.]30",
                "1[.]14[.]96[.]105",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4692,
                "newInLastHour": 4692,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]14[.]64[.]225",
                "1[.]20[.]82[.]225",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13217,
                "newInLastHour": 13217,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]148[.]53:39023/i",
                "hxxp://115[.]55[.]234[.]102:53882/bin[.]sh",
                "hxxp://62[.]60[.]226[.]140/files/5356600191/fPk5ovp[.]exe",
                "hxxp://61[.]53[.]148[.]53:39023/bin[.]sh",
                "hxxp://182[.]124[.]13[.]13:34809/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7422,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7422,
                "newInLastHour": 6217,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rg33qflb[.]slov[.]store\"",
                " \"slov[.]store\"",
                " \"38[.]54[.]42[.]246:80\"",
                " \"130[.]94[.]30[.]168:8090\"",
                " \"43[.]167[.]253[.]129:3232\""
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
            "iocCount": 10715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10715,
                "newInLastHour": 34,
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
            "totalIndicators": 50189,
            "activeSources": 8,
            "criticalAlerts": 25517,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14858,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10659,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4700,
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
                    "1[.]14[.]96[.]105"
                ]
            },
            {
                "name": "malware_download",
                "count": 13207,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://171[.]36[.]18[.]157:35519/i",
                    "hxxp://125[.]46[.]198[.]87:41297/i",
                    "hxxp://216[.]126[.]86[.]6:57863/i"
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]188[.]153:888\"",
                    " \"139[.]196[.]174[.]152:83\"",
                    " \"192[.]3[.]199[.]18:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1357,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]163[.]36:8808\"",
                    " \"anarchy10[.]duckdns[.]org\"",
                    " \"9109d9bd117f540aed9afa6f293c1396cc18ed979056eadca97c69e3f957c14d\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1059,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dc834c0c0982771016202f3ca1808d3bba329379eba79e1d04db31cafb1f43e1\"",
                    " \"afd47ef7378e573c8e575b2030355a2b65a888bdaf56c00a1e6f8e5dc980e7e5\"",
                    " \"1a0c3d520e16ae12ffa918032e608f573b716f009a05c35f64b53f128bf7376d\""
                ]
            },
            {
                "name": "Vidar",
                "count": 780,
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
            },
            {
                "name": " \"n/a",
                "count": 710,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"62b2d643e28c3310427f78372f98b54f9c6ac97502fdab69c61d8a2d34fe7755",
                    " \"1e92a69fa5d92f9244347d05f32c27b95c9355277c659627c5c4b404fcdf6269",
                    " \"1b6c1a783f2aada8ce97dfafb675bc2376bf1700a066681668fc89decca1e5af"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 39509,
        "lastCalculated": "2026-09-17 03:04 IST"
    }
};
