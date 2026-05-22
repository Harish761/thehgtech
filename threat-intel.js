// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-23T02:50:00.079519+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-23T02:49:59.730007+05:30",
    "lastUpdatedFormatted": "May 23, 2026 at 02:49 AM IST",
    "comparisonPeriod": "May 22 \u2013 May 23, 2026",
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
                "hxxps://suporte-inc[.]com/StHNI/",
                "hxxps://chrome-chrome-chrome-cn[.]com[.]cn/",
                "hxxps://atendimento-flow-sp-free[.]my[.]id/via5/",
                "hxxps://sontungmtpmaidinhnhe[.]pages[.]dev/help/contact/736194688276319",
                "hxxps://sontungmtpmaidinhnhe[.]pages[.]dev/help/contact/194269659855175"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1858,
                "newInLastHour": 90,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"07b072aa622696635989edc4e63843e75edfe719db18b17fd4d0ee177e18fa05",
                " \"6ce5d47063040bda058f4ce97129a0be9881442273e9d2b409b5c00b389191d2",
                " \"af6f7cb3dc1783de3749379f915500dfbbc7fae83e4a9bd9bddab651569f1390",
                " \"25b6643d15fc5776c0daeca50bdb69ef57d6a16c5efe2136d7f8c11e9117a114",
                " \"7069bb23afa5e08e135bca9bcdfa48a9f17a8cf6d8e9bd74a4edb06a4740c699"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 21,
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
                "1[.]1[.]223[.]16",
                "1[.]176[.]118[.]246",
                "1[.]180[.]183[.]158",
                "1[.]180[.]42[.]2",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6112,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6112,
                "newInLastHour": 6112,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]105[.]179",
                "1[.]15[.]103[.]109",
                "1[.]162[.]228[.]189"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23676,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23676,
                "newInLastHour": 23676,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_05115473da05b069[.]exe",
                "hxxp://60[.]19[.]39[.]8:44446/i",
                "hxxp://115[.]63[.]229[.]45:39403/i",
                "hxxp://219[.]155[.]249[.]222:42813/bin[.]sh",
                "hxxp://182[.]117[.]29[.]126:57021/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3152,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3152,
                "newInLastHour": 3112,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"sopranos-familytree[.]christmas\"",
                " \"shoplinzspiration[.]com\"",
                " \"88[.]119[.]167[.]142:8000\"",
                " \"87[.]251[.]76[.]213:8443\"",
                " \"5[.]101[.]82[.]98:41843\""
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
            "iocCount": 9742,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9742,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                "167ddfd671ef30c31528515389cfdd11d9251558",
                "3cf2e022211760871544ad891d3b3b698c5f8792",
                "0d5b0889c583e4da90b365b1d73959a9ea745a86",
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55324,
            "activeSources": 8,
            "criticalAlerts": 35261,
            "activeCampaigns": 241
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25564,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9697,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2879,
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 23653,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]160[.]114:49017/bin[.]sh",
                    "hxxp://124[.]94[.]145[.]225:32919/i",
                    "hxxp://116[.]139[.]240[.]165:39639/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]162[.]145[.]107",
                    "1[.]172[.]148[.]176"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1609,
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
                "count": 1415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"35[.]220[.]177[.]232:4343\"",
                    " \"46[.]20[.]109[.]225:8999\"",
                    " \"158[.]94[.]173[.]11:12345\""
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
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
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
                "count": 525,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34a8dc4fb4f4b41fc7bbae738f988305739eb56a",
                    "cbcbab57af719e97174407cc1e97c57c3478d481",
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44"
                ]
            },
            {
                "name": " \"n/a",
                "count": 458,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"31534c04877ce135b2af9198b43ebb644f30ec882c2539696c174e1fa6306c82",
                    " \"a5507f1d46186ec56ff0c2fd819ab7826900ab8785ed830401d5ea5ed847abd1",
                    " \"34d30a3189316df644fc0233cd0169004728567a4cc7e14e41bf65b3bf358299"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48341,
        "lastCalculated": "2026-05-23 02:49 IST"
    }
};
