// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-28T08:58:01.194811+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-28T08:58:00.840811+05:30",
    "lastUpdatedFormatted": "Jul 28, 2026 at 08:58 AM IST",
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
                "hxxp://buildtovaro[.]click/",
                "hxxp://imtkeno[.]pro/",
                "hxxp://fortlux[.]top/",
                "hxxp://sp3ct-nexvor-biz8-kirsal-povun[.]pages[.]dev/",
                "hxxp://sp25ct7-benlix-biz-zomrik-dafsen[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1010,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1010,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fc09faa3fdbf0f6b7d7aad125eca6798b8fb928714dfb0c6b7964a866fdffe39",
                " \"a522e892f5a5d41e6b71dfa435491682dd20fe2f562075af071f929c3fa38620",
                " \"52f011851639a0c3a5ac55a68314d0b11d6893805f93f0934a4b72f5c3c6d15d",
                " \"83801179bc16c5d1649aff7f6f7bbe46a2e6ef39ec4a3d3d558e758ba89eb7f5",
                " \"da8d5c07be1c8cc6bcf73f1d9d4794f3de6a8e8d5d873ca310c3bd366d8bde1d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1663,
                "newInLastHour": 1174,
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
                "1[.]10[.]185[.]51",
                "1[.]12[.]65[.]23",
                "1[.]188[.]100[.]188",
                "1[.]191[.]146[.]65",
                "1[.]196[.]79[.]27"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4776,
                "newInLastHour": 4776,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]162[.]5[.]215",
                "1[.]169[.]202[.]170",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14939,
                "newInLastHour": 14939,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]153[.]223:59732/bin[.]sh",
                "hxxp://182[.]127[.]114[.]76:45513/i",
                "hxxp://123[.]9[.]244[.]135:59466/bin[.]sh",
                "hxxp://222[.]137[.]93[.]50:33652/i",
                "hxxp://222[.]137[.]93[.]50:33652/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6268,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6268,
                "newInLastHour": 5203,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wdkvpsoyy[.]glycovits[.]com\"",
                " \"hpdhfc[.]merit-uk[.]co[.]uk\"",
                " \"110[.]42[.]189[.]130:8085\"",
                " \"43[.]247[.]135[.]185:3232\"",
                " \"8[.]218[.]138[.]77:1521\""
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
            "iocCount": 10264,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10264,
                "newInLastHour": 161,
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
            "totalIndicators": 48416,
            "activeSources": 8,
            "criticalAlerts": 26390,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16309,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10081,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3862,
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
                "count": 15281,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]167[.]3[.]49:55650/bin[.]sh",
                    "hxxp://115[.]49[.]202[.]73:57357/bin[.]sh",
                    "hxxp://182[.]127[.]104[.]102:52909/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1428,
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
                "count": 1337,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"9a7fdfd933725c6cc3345da81b6ee2d6903e225f961aa18efa5b5a9447f4b015\"",
                    " \"30bc73c6672e6c46d21086a04762ce4170fd4e99\"",
                    " \"a3db22547419f693905d3dd045ee9f84\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1006,
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
                "count": 941,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xpcnbrpll[.]eng-bettinggods[.]com\"",
                    " \"ckhycd[.]lipogammy[.]com\"",
                    " \"hatshdnxi[.]merit-uk[.]co[.]uk\""
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
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 609,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "45bbc5ebc131cca9663c35c95459564007049d07",
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 41601,
        "lastCalculated": "2026-07-28 08:58 IST"
    }
};
