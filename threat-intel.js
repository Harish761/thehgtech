// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-12T03:49:31.265397+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-12T03:49:30.762827+05:30",
    "lastUpdatedFormatted": "Oct 12, 2026 at 03:49 AM IST",
    "comparisonPeriod": "Oct 11 \u2013 Oct 12, 2026",
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
                "hxxps://clickblitz22[.]shop/",
                "hxxps://www[.]roblox[.]com[.]mu/users/1558532921/profile",
                "hxxps://mfacebook[.]com[.]vn/kfpw6ogvhx9?xNK&Qup",
                "hxxps://rbcode[.]net/v/271d9243d604619fd8547fbfc3a75f03",
                "hxxps://ledger-live-desktop-app-asc[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 874,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 874,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fc1c5431779e23015cc1d8cf166feff435db2ac25de44377eb1d88e2c66f59a3",
                " \"ffa8d7d6a31ed9e712844e2aeac58e2f5ff1722bb70b141eabc6f7c824458768",
                " \"f62f755f66a379a04e484ad079c228c4621b8306c9b2b872604194e4d3add14a",
                " \"276f6a2221548827416b019aa336f44c395c7efdf512ec2286bc089672832e4b",
                " \"25e110e05a59b8b67b38911318b77a5951dc613eb3105e600e638bc122f4b94a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
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
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]193[.]63[.]3",
                "1[.]20[.]173[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4810,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4810,
                "newInLastHour": 4810,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]162[.]245[.]71",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33114,
                "newInLastHour": 33114,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]65[.]139[.]160/arm5",
                "hxxp://123[.]10[.]203[.]32:43613/i",
                "hxxp://42[.]234[.]165[.]238:39954/i",
                "hxxp://60[.]23[.]232[.]179:33471/i",
                "hxxp://42[.]224[.]140[.]102:43933/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5746,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5746,
                "newInLastHour": 5049,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"4fe508025770c53e0717b524175f079ee23443a4ed909a36be04ee7522e7e055\"",
                " \"kof[.]5tr[.]org\"",
                " \"hxxps://kof[.]5tr[.]org/\"",
                " \"kof[.]iakmialor[.]web[.]id\"",
                " \"hxxps://kof[.]iakmialor[.]web[.]id/\""
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
            "iocCount": 10955,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10955,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9769dce57ee77a6da94da9c824cd923cb9599892",
                "d621cfc19f287afe3b53ee95f4463732d2de342f",
                "929b3729b42dabeb68077b03b2802e5b53ceade7",
                "1c14689e58ebc09098f7c23eec08a314eb17ec76",
                "4a0c5885230b991333569023a767f7cc3a773baf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68273,
            "activeSources": 8,
            "criticalAlerts": 44910,
            "activeCampaigns": 278
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33977,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10933,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 4403,
                "trend": "stable",
                "percentage": 4
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
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
                "count": 33085,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://63[.]245[.]153[.]41:37905/i",
                    "hxxp://175[.]146[.]242[.]218:54547/bin[.]sh",
                    "hxxp://120[.]28[.]167[.]203:41366/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]63[.]3",
                    "1[.]20[.]173[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1322,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"160[.]191[.]52[.]105:45893\"",
                    " \"129[.]121[.]140[.]89:8080\"",
                    " \"129[.]121[.]140[.]89:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 831,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9769dce57ee77a6da94da9c824cd923cb9599892",
                    "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
                    "17658c947940cef2209381bda159a44a8f55883c"
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
                "count": 719,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 616,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"190[.]102[.]40[.]154:443\"",
                    " \"91[.]92[.]41[.]151:443\"",
                    " \"91[.]92[.]41[.]151:56001\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 58298,
        "lastCalculated": "2026-10-12 03:49 IST"
    }
};
