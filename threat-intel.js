// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-26T12:14:53.217446+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-26T12:14:52.932189+05:30",
    "lastUpdatedFormatted": "Jul 26, 2026 at 12:14 PM IST",
    "comparisonPeriod": "Jul 25 \u2013 Jul 26, 2026",
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
                "hxxp://trejr-suite[.]square[.]site/",
                "hxxp://wundz[.]netlify[.]app/",
                "hxxps://www[.]roblox[.]com[.]ml/users/205863827356/profile",
                "hxxp://sp5ct-kasel-biz8-furem-horin[.]pages[.]dev/",
                "hxxp://browser-bridge-app-auth[.]typedream[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 843,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6a19cb9afaee639d96896cc266db17a4b260bf4bd67fc8b88e9a214cf86a2735",
                " \"ce7568afc34c67e286c731c882d03a9b2a8401b04fbd4613f5bcb98f4b09a277",
                " \"d487a3bbd941c891d83433d955b05d9a569a04a61f8dc6b33b79c8842dc42100",
                " \"a64aadbc9c68fad12433ca75b2ded3c70db9a73ada83c7abf4882b04cd91f500",
                " \"bed759e549a932e839a6fc57ae831105cc17bdd8ec86b5ba54d018f92f5d9795"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
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
                "1[.]117[.]171[.]170",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]12[.]65[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4615,
                "newInLastHour": 4615,
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
            "iocCount": 14765,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14765,
                "newInLastHour": 14765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]191[.]104[.]40:53304/bin[.]sh",
                "hxxp://78[.]165[.]115[.]123:50272/i",
                "hxxp://123[.]14[.]102[.]112:54726/i",
                "hxxp://105[.]184[.]26[.]87:54517/i",
                "hxxp://42[.]7[.]240[.]14:46174/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4375,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4375,
                "newInLastHour": 3967,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"107[.]175[.]227[.]55:22\"",
                " \"107[.]175[.]227[.]55:3232\"",
                " \"zzjrse[.]usen-pegasus[.]com\"",
                " \"usen-pegasus[.]com\"",
                " \"fjedaz[.]us-en-pegasus[.]com\""
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
            "iocCount": 10261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10261,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "45bbc5ebc131cca9663c35c95459564007049d07",
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
                "d08e16884011f6910fe8087a74dac507ff7d2a6a",
                "8f0de55e89d97b4f3581f77805955a2b719563b8",
                "d447d27a879fe80420dc54244870f3f7d25993bb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47192,
            "activeSources": 8,
            "criticalAlerts": 25857,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15618,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10239,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3297,
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
                    "1[.]10[.]185[.]51",
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "malware_download",
                "count": 14744,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://lapidorseposoalovbs2[.]com/cleen_trs1[.]exe",
                    "hxxp://123[.]5[.]186[.]150:49680/i",
                    "hxxp://42[.]227[.]203[.]153:43612/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1669,
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
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]238[.]100[.]128:8080\"",
                    " \"47[.]238[.]100[.]128:80\"",
                    " \"47[.]238[.]100[.]128:4433\""
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
            },
            {
                "name": " \"unknown\"",
                "count": 525,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"35[.]206[.]101[.]37:7443\"",
                    " \"111[.]170[.]148[.]134:28888\"",
                    " \"hxxps://eco-megalabs[.]com/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 38680,
        "lastCalculated": "2026-07-26 12:14 IST"
    }
};
