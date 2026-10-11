// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-12T01:41:36.345270+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-12T01:41:35.925330+05:30",
    "lastUpdatedFormatted": "Oct 12, 2026 at 01:41 AM IST",
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
            "iocCount": 867,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 867,
                "newInLastHour": 153,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5cfc1f93856f8f753ce3cae560b3a4615cb8f039be6769283d77b00dc22c1408",
                " \"bd6fc7755b14d207046e4edf7a455ea8bc40b514bfc9257b925a8b08cb3677d0",
                " \"f293fc920a9a083944772880648f90be989725923a85271bf639426df97880d0",
                " \"122e80c889c1d4f7b9f99abe635711b02aadf2d110447d2df18082458178f754",
                " \"2cef5ef93b2c234a7c04e9d5116760addd02b39dc6b6ea21ec6272297c3a357a"
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
                "newInLastHour": 25,
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
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]3",
                "1[.]20[.]173[.]155",
                "1[.]20[.]175[.]54",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4705,
                "newInLastHour": 4705,
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
            "iocCount": 33085,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33085,
                "newInLastHour": 33085,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://63[.]245[.]153[.]41:37905/i",
                "hxxp://175[.]146[.]242[.]218:54547/bin[.]sh",
                "hxxp://120[.]28[.]167[.]203:41366/i",
                "hxxp://157[.]66[.]146[.]183:57014/i",
                "hxxp://167[.]250[.]158[.]32:43493/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6378,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6378,
                "newInLastHour": 5653,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://hik[.]5tr[.]org/\"",
                " \"hik[.]iakmialor[.]web[.]id\"",
                " \"hxxps://hik[.]iakmialor[.]web[.]id/\"",
                " \"hik[.]5tr[.]org\"",
                " \"hxxps://hik[.]iakmialor[.]web[.]id\""
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
                "newInLastHour": 346,
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
            "totalIndicators": 68435,
            "activeSources": 8,
            "criticalAlerts": 44482,
            "activeCampaigns": 284
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33895,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10587,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4233,
                "trend": "stable",
                "percentage": 1
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
                "count": 33012,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]103[.]215:38282/i",
                    "hxxps://gitlab[.]com/chaingangs/fivem-mod-menu/-/raw/HEAD/Loader[.]exe",
                    "hxxps://github[.]com/sizzenls/Umbrella-HWID-Tool/raw/HEAD/Umbrella/Umbrella[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]33"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1658,
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
                "count": 1442,
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
                "count": 1328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"129[.]121[.]140[.]89:80\"",
                    " \"114[.]215[.]184[.]158:7000\"",
                    " \"129[.]121[.]140[.]89:22\""
                ]
            },
            {
                "name": "Vidar",
                "count": 753,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
                    "17658c947940cef2209381bda159a44a8f55883c",
                    "3644a1d19d369a66e0970ee6e997736f1338727f"
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
                "count": 702,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 619,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]151:443\"",
                    " \"91[.]92[.]41[.]151:56001\"",
                    " \"91[.]92[.]41[.]151:56002\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 562,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://4k4iard[.]tupek[.]store/update[.]sh\"",
                    " \"mgxyuko[.]xyz\"",
                    " \"hxxps://antimalwarediagnostics[.]st/files/exe/shellhost\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 59272,
        "lastCalculated": "2026-10-12 01:41 IST"
    }
};
