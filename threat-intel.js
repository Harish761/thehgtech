// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-27T02:38:06.938800+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-27T02:38:06.612902+05:30",
    "lastUpdatedFormatted": "Jul 27, 2026 at 02:38 AM IST",
    "comparisonPeriod": "Jul 26 \u2013 Jul 27, 2026",
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
                "hxxps://www[.]roblox[.]com[.]am/users/219680187466/profile",
                "hxxps://bersatu[.]me/d5Y9tX",
                "hxxp://www[.]facebookloginpage1[.]blogspot[.]com/",
                "hxxps://www[.]new36-3-1-766[.]vercel[.]app/",
                "hxxps://robiox[.]com[.]py/users/249742163035/profile"
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
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"41986e5a10e7d708d74a8758a0dfc543fcaae48fe238a4b82194da0292338c14",
                " \"732b8cf362f486b7569eaa85d9e39f71fe1438ba68214300a9b33c204c447264",
                " \"6e795be8d4f34f798012d46530c62843dbb74c7cc64fd3a2db37ff68c85f52b8",
                " \"90233ccbb540fad9ec81ca3ae88266ed2df968f559a64bcc133ea5875ac7e2c0",
                " \"158089dcc6e71e5f6dd212dfdb7657414f3eb540aefed1d82c6b9b56195956f4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1643,
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
                "1[.]119[.]194[.]226",
                "1[.]14[.]192[.]40",
                "1[.]15[.]173[.]241",
                "1[.]159[.]90[.]31"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4624,
                "newInLastHour": 4624,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]209[.]20",
                "1[.]162[.]5[.]215",
                "1[.]197[.]102[.]62",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15389,
                "newInLastHour": 15389,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]249[.]115:35796/i",
                "hxxp://123[.]11[.]13[.]173:44354/i",
                "hxxp://182[.]127[.]3[.]76:52608/i",
                "hxxp://221[.]15[.]185[.]193:50489/i",
                "hxxp://123[.]11[.]13[.]173:44354/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5251,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5251,
                "newInLastHour": 4473,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"113[.]45[.]238[.]149:8081\"",
                " \"113[.]45[.]238[.]149:21\"",
                " \"94[.]103[.]1[.]175:16482\"",
                " \"mabqig[.]proznth[.]com\"",
                " \"proznth[.]com\""
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
            "iocCount": 10227,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10227,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "131d534087149d0095a326dcb33e77afcbec308c",
                "45bbc5ebc131cca9663c35c95459564007049d07",
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
                "d08e16884011f6910fe8087a74dac507ff7d2a6a",
                "8f0de55e89d97b4f3581f77805955a2b719563b8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48725,
            "activeSources": 8,
            "criticalAlerts": 26571,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16331,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10240,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3755,
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
                "count": 15372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]12[.]46[.]32:47501/i",
                    "hxxp://27[.]44[.]146[.]5:48371/i",
                    "hxxp://115[.]50[.]206[.]131:47410/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]65[.]23",
                    "1[.]14[.]192[.]40",
                    "1[.]14[.]99[.]179"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1663,
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
                "count": 1433,
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
                "count": 1361,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"168[.]93[.]199[.]157:80\"",
                    " \"203[.]160[.]54[.]105:8080\"",
                    " \"47[.]238[.]100[.]128:8080\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1072,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]45[.]190[.]210:8083\"",
                    " \"119[.]45[.]190[.]210:1883\"",
                    " \"20[.]89[.]182[.]93:3232\""
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
                "count": 693,
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
                "count": 656,
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
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 39802,
        "lastCalculated": "2026-07-27 02:38 IST"
    }
};
