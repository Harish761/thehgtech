// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-01T19:29:29.593551+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-01T19:29:29.297563+05:30",
    "lastUpdatedFormatted": "Apr 01, 2026 at 07:29 PM IST",
    "comparisonPeriod": "Mar 31 \u2013 Apr 01, 2026",
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
                "hxxps://pedagiodigital-auto[.]com/atendimento/home[.]php",
                "hxxp://sso-en-ca-netcoins-com-nav-azure[.]webflow[.]io/",
                "hxxps://ckoinsquayrelogin[.]webflow[.]io/",
                "hxxp://www[.]instagram-clone-lime[.]vercel[.]app/",
                "hxxps://kucologinn[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 780,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 780,
                "newInLastHour": 135,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"670781d0d35582d3094cf375a43c59cfba157e0a99fe919e462ad06045f0843c",
                " \"6f76ee849452d620288c6f7f4619b81b3c706177313fecbea706aa05ac4ab1e3",
                " \"784e7ec599e5932974bacbbdba5a85cd71ff9cf17342a4cb13289ae830f092fc",
                " \"f3b86b6587466afe8b515c08e31c9bea44ccfc3a795de0095bad2e8ae74ea2d7",
                " \"d2e8bdf1cc427f6311d2ae6561ef78e5f52ea7f79ab8d14ed352fce401e3d353"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1580,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1580,
                "newInLastHour": 7,
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
                "1[.]14[.]3[.]240",
                "1[.]176[.]134[.]241",
                "1[.]178[.]175[.]72",
                "1[.]182[.]191[.]117",
                "1[.]188[.]102[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4962,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4962,
                "newInLastHour": 4962,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]192[.]202[.]92",
                "1[.]194[.]238[.]168",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21493,
                "newInLastHour": 21493,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://finalvault[.]sewdarken[.]in[.]net/verification[.]google",
                "hxxp://123[.]5[.]112[.]120:43043/bin[.]sh",
                "hxxp://ampgg[.]bossjy[.]cc[.]cd/bot_ampgg[.]sh",
                "hxxp://39[.]74[.]39[.]212:34127/i",
                "hxxp://120[.]28[.]212[.]118:42550/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1032,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1032,
                "newInLastHour": 1010,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"finalvault[.]sewdarken[.]in[.]net\"",
                " \"d3pl-lab[.]movementsheptun[.]in[.]net\"",
                " \"lumline0al[.]sewdarken[.]in[.]net\"",
                " \"hfx03k[.]movementsheptun[.]in[.]net\"",
                " \"sp4rk3-trace[.]movementsheptun[.]in[.]net\""
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
            "iocCount": 9441,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9441,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9ef62e160114c7326b22738f121e1bd085a9a902",
                "97496b1be73f3473398e195fe756386fba8195ba",
                "95a63d5be2f0a11bd929a3da36fb7bc08680c69f",
                "584bb8216b62ba7f705b500e0d3890b00aa39011",
                "c80cdeac49664ee5442be41849242910d2070480"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49380,
            "activeSources": 8,
            "criticalAlerts": 31507,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22079,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9428,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 282,
                "trend": "down",
                "percentage": -25
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21347,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://farm-logic[.]combinekabisia[.]in[.]net/verification[.]google",
                    "hxxp://182[.]127[.]124[.]243:60222/i",
                    "hxxp://219[.]155[.]83[.]117:59085/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]176[.]134[.]241",
                    "1[.]178[.]175[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1592,
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
                "count": 1395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 494,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"farm-logic[.]combinekabisia[.]in[.]net\"",
                    " \"root-source[.]maknothplacenta[.]in[.]net\"",
                    " \"health-node[.]maknothplacenta[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 464,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "584bb8216b62ba7f705b500e0d3890b00aa39011",
                    "c49a0dbefcbc45334663c2fd9e1830eeadc025f6",
                    "7f36a32024663b19e04cca391d81cccee18e02d1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 376,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a153d631044cb3a6e47f781170624fec9552c8c1",
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9",
                    "cf4cfdb36fda3047e572f36b474e5a488ffbfdc7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42916,
        "lastCalculated": "2026-04-01 19:29 IST"
    }
};
