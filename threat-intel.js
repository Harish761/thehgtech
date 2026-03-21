// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-22T00:30:30.174778+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-22T00:30:29.884893+05:30",
    "lastUpdatedFormatted": "Mar 22, 2026 at 12:30 AM IST",
    "comparisonPeriod": "Mar 21 \u2013 Mar 22, 2026",
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
                "hxxp://gifts-marathon[.]click/id=5947221648",
                "hxxps://u[.]to/4TN3Ig",
                "hxxp://blekfilogon[.]webflow[.]io/",
                "hxxp://help--logie--kucuie[.]webflow[.]io/",
                "hxxp://www[.]amazonclone-nine-psi[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 712,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"44bcb51ef26fe58edd36ea97714f79d9ac9772ee62e3bdbcfbcf4469fedff337",
                " \"0a4824698404f31c692ed4867716efa290575c277139f291a23c2a52d1a5ac32",
                " \"ba4b2d2d3e414c96ecf7efa75cc9b9311f5e3f4692782b06f5ed197a021030b0",
                " \"30fb3d14c28e75295d014ff2e0d918c8df8b41b5287727c67871d0cad4ee0116",
                " \"88c1c143c1a66cb69e2c47fe89d17cc147fcdcfa06a8c481886a6abf4d86426f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
                "newInLastHour": 2,
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
                "1[.]161[.]138[.]75",
                "1[.]188[.]100[.]103",
                "1[.]189[.]229[.]231",
                "1[.]192[.]179[.]163"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5169,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5169,
                "newInLastHour": 5169,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]164[.]175[.]121",
                "1[.]189[.]21[.]20",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20353,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20353,
                "newInLastHour": 20353,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://srv4space[.]virtualenvironment[.]in[.]net/verification[.]google",
                "hxxp://117[.]241[.]59[.]29:53429/bin[.]sh",
                "hxxps://srv3field[.]virtualenvironment[.]in[.]net/verification[.]google",
                "hxxp://42[.]5[.]66[.]188:46861/i",
                "hxxps://srv2outer[.]virtualenvironment[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1664,
                "newInLastHour": 1506,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"srv4space[.]virtualenvironment[.]in[.]net\"",
                " \"srv3field[.]virtualenvironment[.]in[.]net\"",
                " \"srv2outer[.]virtualenvironment[.]in[.]net\"",
                " \"srv1proc[.]virtualenvironment[.]in[.]net\"",
                " \"loc4path[.]systemintegration[.]in[.]net\""
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
            "iocCount": 9308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9308,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "daa4e094b47b8c884475fc642924f7891d537687",
                "9b5d6e71e30e21da223ae28fe9015475a5300982",
                "137adb757afcb4e5980a5e6aa63ac498559309d2",
                "c23d6863f7ad286ca9f63354456c552d0b37d6a6",
                "ca0c1280a2c26415f8d77ca00a39c6986841da0c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48983,
            "activeSources": 8,
            "criticalAlerts": 30361,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21067,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9294,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 770,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
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
                "count": 20288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://srv3gate[.]cloudinfrastructure[.]in[.]net/verification[.]google",
                    "hxxp://221[.]200[.]217[.]85:57547/bin[.]sh",
                    "hxxp://158[.]94[.]208[.]7/files/7115306239/Qub5kf3[.]exe"
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
                    "1[.]15[.]118[.]23",
                    "1[.]161[.]138[.]75"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "name": " \"unknown\"",
                "count": 651,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"85[.]31[.]236[.]140:3000\"",
                    " \"148[.]135[.]76[.]20:8888\"",
                    " \"hxxps://fungyiptoys[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 644,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c23d6863f7ad286ca9f63354456c552d0b37d6a6",
                    "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                    "634e580a85c375140b9a7f5972559dfd4f02033d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 545,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c",
                    "fdd41b75b65c0dfb3a3873ddca6d77723a5e92b6",
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"srv4sync[.]cloudinfrastructure[.]in[.]net\"",
                    " \"srv3gate[.]cloudinfrastructure[.]in[.]net\"",
                    " \"srv2proc[.]cloudinfrastructure[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7074621858c3ebbee2f40b6fbe04e64e494ca5fc",
                    "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                    "e57c93f657e5054142f985327fdff4eb50b349f0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42387,
        "lastCalculated": "2026-03-22 00:30 IST"
    }
};
