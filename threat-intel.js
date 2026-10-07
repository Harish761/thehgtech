// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-07T11:16:26.977103+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-07T11:16:26.527581+05:30",
    "lastUpdatedFormatted": "Oct 07, 2026 at 11:16 AM IST",
    "comparisonPeriod": "Oct 06 \u2013 Oct 07, 2026",
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
                "hxxp://security-server-landing-page--richuzzy2020[.]replit[.]app/",
                "hxxps://www[.]roblox[.]com[.]mu/communities/4579637885/TheValorr",
                "hxxps://www[.]roblox[.]com[.]ml/users/407463663321/profile",
                "hxxps://pennaelectric[.]s3[.]eu-central-1[.]amazonaws[.]com/dropbox/download[.]html",
                "hxxp://cf234276[.]tw1[.]ru/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1508,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1508,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"618a1b1d30d6f2bd4a2a122c6caa7cada264460175e4c41a9a7ab39d17b466b3",
                " \"3740e3883b64840461b3dfe2ce86695f32a14f28c8e0353c860ff6939a8c2538",
                " \"c4c7cc2f8e281b36d0bc29de6e08d354d83c4f734acaded25e7c8dfb1f580db5",
                " \"92e56ff0e46fb9e52f8866bbf4e5c1c1e989a13377aa6dcc9079a8adcdaa4bc9",
                " \"040a0da5c3f26dc1b971271e13e8930c7680b8aeef8aba87f885009760a71709"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1640,
                "newInLastHour": 57,
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
                "1[.]193[.]56[.]152",
                "1[.]193[.]63[.]138",
                "1[.]204[.]83[.]28",
                "1[.]24[.]16[.]10",
                "1[.]24[.]16[.]110"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4737,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4737,
                "newInLastHour": 4737,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]162[.]245[.]71"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31059,
                "newInLastHour": 31059,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://202[.]1[.]26[.]13:44204/i",
                "hxxp://113[.]221[.]14[.]251:35903/i",
                "hxxp://59[.]97[.]252[.]95:51706/bin[.]sh",
                "hxxp://175[.]147[.]94[.]199:51805/bin[.]sh",
                "hxxp://60[.]16[.]135[.]182:50504/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8917,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8917,
                "newInLastHour": 7203,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tofexy[.]workers[.]dev\"",
                " \"botsportscanning[.]duckdns[.]org\"",
                " \"45[.]55[.]202[.]73:9932\"",
                " \"128[.]90[.]102[.]194:2015\"",
                " \"128[.]90[.]108[.]50:2424\""
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
            "iocCount": 10912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10912,
                "newInLastHour": 233,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2c32691ea854fdd88474aec7283283c4e4fe9d10",
                "d6b483d29d98e74b22cf0275061f76fbb0574176",
                "0446b968d2664c7d195cb91e4938bf6b92d819da",
                "85eeedf7693129c522860142f2eb0c84f5fb355e",
                "6917195681c5f23ea6ebabed360e26ab7ff93a67"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69515,
            "activeSources": 8,
            "criticalAlerts": 43431,
            "activeCampaigns": 288
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32774,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10657,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4230,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 31221,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://185[.]89[.]156[.]101:35112/i",
                    "hxxp://115[.]51[.]88[.]191:59352/i",
                    "hxxp://123[.]129[.]56[.]38:56147/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]188[.]103[.]91",
                    "1[.]193[.]63[.]138",
                    "1[.]204[.]53[.]109"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1788,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zpconstructionca[.]com\"",
                    " \"zugenergie[.]de\"",
                    " \"zygrle[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1583,
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
                "count": 1447,
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
                "count": 1292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]94[.]56[.]71:8080\"",
                    " \"47[.]94[.]56[.]71:80\"",
                    " \"47[.]94[.]56[.]71:443\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1147,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"139[.]162[.]5[.]254:3778\"",
                    " \"ece6f4df5671938681d7c4c417cea50868317ca77b61a4f171cbe635a9b454cd\"",
                    " \"176[.]65[.]139[.]36:5050\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 758,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zijpestijl[.]nl\"",
                    " \"www[.]wood-fermetures[.]com\"",
                    " \"www[.]yourbestmarriageblog[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 754,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
                    "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                    "f8f56c66c440df5666400e34a532c04d6ca4e5b0"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 58652,
        "lastCalculated": "2026-10-07 11:16 IST"
    }
};
