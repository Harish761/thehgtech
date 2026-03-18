// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-18T08:46:06.602703+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-18T08:46:06.316983+05:30",
    "lastUpdatedFormatted": "Mar 18, 2026 at 08:46 AM IST",
    "comparisonPeriod": "Mar 17 \u2013 Mar 18, 2026",
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
                "hxxp://w4b-d4naa[.]cxbb-ofisiaaal[.]biz[.]id/",
                "hxxps://www[.]roblox[.]com[.]gl/users/437234102662/profile",
                "hxxps://www[.]amazon-clone-rho-nine[.]vercel[.]app/",
                "hxxps://www[.]roblox[.]com[.]gl/users/205819886412/profile",
                "hxxps://roblox[.]com[.]ge/users/6019202459/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 675,
                "newInLastHour": 171,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f790794133d4017f9e81125038c6f63845603ba353f36e786f3359f4acf3449b",
                " \"2b2937df3e5ae5465058b45ddaf6e46432613fa5ac678d4d64a8daf0c2f56bfc",
                " \"d22abd12ec7ae97dac9982eb07f46106075502f8844ebe65fc529ccfceecc851",
                " \"1d4a3cf811b18a04d46d150ae01264dfcaaaf902c435f46b2add18600328490f",
                " \"577383ef42a6e32ab44828658cbb0589340828cb55cd296cb18adc0d5e90b95d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139",
                "1[.]170[.]61[.]83"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6152,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6152,
                "newInLastHour": 6152,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]198[.]111",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]189[.]21[.]20",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19586,
                "newInLastHour": 19586,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]196[.]181[.]154:32960/bin[.]sh",
                "hxxp://175[.]173[.]90[.]64:47108/bin[.]sh",
                "hxxps://dist-z7-cache[.]ventonodal[.]cfd/verification[.]google",
                "hxxps://sync-v02-edge[.]ventonodal[.]cfd/verification[.]google",
                "hxxp://117[.]253[.]65[.]125:36946/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1940,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1940,
                "newInLastHour": 1904,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dist-z7-cache[.]ventonodal[.]cfd\"",
                " \"dentalux202bk[.]ydns[.]eu\"",
                " \"dentalux202[.]ydns[.]eu\"",
                " \"node-x911-auth[.]ventonodal[.]cfd\"",
                " \"breezetide[.]slashbak[.]in[.]net\""
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
            "iocCount": 9280,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9280,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                "c5472c7ec6cac644eba170ea2b487e06d127481c",
                "a6424f7b04438f3acec298c9333197df2b3c6526",
                "4f9e60ee24af588adb3d71b7c0617592c7f21b44",
                "5ec0b97b4993394721c873a4e9b8ed52cade22f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48573,
            "activeSources": 8,
            "criticalAlerts": 29787,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20521,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9266,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 771,
                "trend": "up",
                "percentage": 37
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19907,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]146[.]72:34536/bin[.]sh",
                    "hxxps://petalcra[.]catflat[.]in[.]net/verification[.]google",
                    "hxxps://156[.]233[.]71[.]230/Interac_e-transfer[.]bat"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]15[.]189",
                    "1[.]161[.]142[.]123",
                    "1[.]163[.]107[.]124"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1527,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 582,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"149[.]40[.]3[.]138:7443\"",
                    " \"hxxps://verification-cdn-cloud[.]beer/api/css[.]js\"",
                    " \"verification-cdn-cloud[.]beer\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 474,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"petalcra[.]catflat[.]in[.]net\"",
                    " \"nqsl[.]catflat[.]in[.]net\"",
                    " \"delive-crest[.]catflat[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 418,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                    "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                    "4fe4c76644c524e662ba08364bb0405775eab374"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43118,
        "lastCalculated": "2026-03-18 08:46 IST"
    }
};
