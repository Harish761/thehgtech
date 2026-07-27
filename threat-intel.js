// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-28T02:50:15.488609+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-28T02:50:15.081026+05:30",
    "lastUpdatedFormatted": "Jul 28, 2026 at 02:50 AM IST",
    "comparisonPeriod": "Jul 27 \u2013 Jul 28, 2026",
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
                "hxxps://freeflowbron[.]shop/",
                "hxxps://freebrasilflow[.]shop/",
                "hxxps://freebrflow[.]shop/",
                "hxxp://app[.]shopledgerapp[.]com/login",
                "hxxp://comcast-1[.]xhost[.]live/mgifunds"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1001,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1001,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c21a12edd5493e0e0c762a0c7ac7ce1ebbcbffed11fc27714e88b0843908e994",
                " \"ed35e07d9a91e36eb996e234a7f7fce0243b206976ba5c67d05ea6a05c07233f",
                " \"15d34471d464ff576aa1c6fdbed6821c3b38f811916770a7db2422c5a90d01c8",
                " \"f10f83559e3c7a4e53b023c1ef06bc0fa91e06e48947e1360653d129daf64460",
                " \"4605e809be293537ef4f2aeb8f181ebd840b450dccc69507ea918a3918a6cd42"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 489,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 489,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24"
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]12[.]65[.]23",
                "1[.]15[.]173[.]241",
                "1[.]15[.]24[.]165"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4751,
                "newInLastHour": 4751,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]209[.]20",
                "1[.]14[.]64[.]225",
                "1[.]162[.]5[.]215",
                "1[.]169[.]202[.]170"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15281,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15281,
                "newInLastHour": 15281,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]167[.]3[.]49:55650/bin[.]sh",
                "hxxp://115[.]49[.]202[.]73:57357/bin[.]sh",
                "hxxp://182[.]127[.]104[.]102:52909/i",
                "hxxp://123[.]252[.]17[.]79:33677/bin[.]sh",
                "hxxp://125[.]44[.]50[.]221:45691/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6237,
                "newInLastHour": 5310,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"6afcaa8ef95e2867087f41d30b3e3e1b\"",
                " \"fe1f23de8bd1e84ad1a33939638144ee\"",
                " \"55328cd52aed6e375338b394b1bb8c4a1438e52d3ddf079c316f05e764b6f72d\"",
                " \"29a21b6970cf47fe514bdff500d8b1d326420024\"",
                " \"068fe402eb8cdbb0fe21f972ac4a23fa\""
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
            "iocCount": 10103,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10103,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4",
                "131d534087149d0095a326dcb33e77afcbec308c",
                "45bbc5ebc131cca9663c35c95459564007049d07",
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49796,
            "activeSources": 8,
            "criticalAlerts": 26514,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16279,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10235,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3864,
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
                "name": "malware_download",
                "count": 15267,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]54[.]43[.]141:40215/bin[.]sh",
                    "hxxp://115[.]53[.]219[.]93:49340/bin[.]sh",
                    "hxxp://123[.]11[.]172[.]243:59690/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]131[.]224",
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1662,
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
                "count": 1431,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1334,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]244[.]52[.]101:22\"",
                    " \"38[.]244[.]52[.]101:80\"",
                    " \"38[.]244[.]52[.]101:8080\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1008,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://edenads[.]com/\"",
                    " \"breakneckridgefarm[.]com\"",
                    " \"hxxps://t[.]me/+viEc3YLkulJhNTc0\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 938,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"epltd3ga[.]kkslot777[.]asia\"",
                    " \"nqnlh9i9[.]shop-pegasus[.]com\"",
                    " \"dwfbenn9[.]qlaneturnstiles[.]com\""
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13"
                ]
            },
            {
                "name": "Vidar",
                "count": 653,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "45bbc5ebc131cca9663c35c95459564007049d07",
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 40683,
        "lastCalculated": "2026-07-28 02:50 IST"
    }
};
