// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-11T00:35:47.979074+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-11T00:35:47.700846+05:30",
    "lastUpdatedFormatted": "Sep 11, 2026 at 12:35 AM IST",
    "comparisonPeriod": "Sep 10 \u2013 Sep 11, 2026",
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
                "hxxp://sso---secure-robinhood--coms[.]webflow[.]io/",
                "hxxp://www[.]transfer-to-click[.]vercel[.]app/",
                "hxxps://mail-email-ionos--refactored-octo-computing-machine-production[.]up[.]railway[.]app/",
                "hxxp://metamask-update[.]github[.]io/",
                "hxxps://pembatalan-pinjamaanz[.]vrr[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1141,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1141,
                "newInLastHour": 244,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e5a665da69d6ee08e46566dd1048c25554bdf620f63a152758a11cd1d9e6d634",
                " \"66fbd782f3a7bdbf9ab71f08d7c9cd2d938e4ae6d584967214787f64fd1dd4f6",
                " \"20494d7c6537bc60a076bc7583a6a1eb07720bbe408708e6d2aec8717377de3b",
                " \"c459207f8f9e5810cbde75ee5de0440a146cf9d57f765ed434171ce4192deed1",
                " \"33e406193df703b518a6ab20e0dc296bb82776361b3bc65a1b6bb50a83c29b0a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 11,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5361,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5361,
                "newInLastHour": 5361,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]27[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13705,
                "newInLastHour": 13705,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://101[.]74[.]52[.]251:15884/i",
                "hxxp://3[.]133[.]139[.]254/tiny_bot[.]arm",
                "hxxp://3[.]133[.]139[.]254/mirai[.]mips",
                "hxxp://3[.]133[.]139[.]254/tiny_bot[.]mipsel",
                "hxxp://3[.]133[.]139[.]254/mirai[.]mipsel"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9649,
                "newInLastHour": 9389,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]skylab[.]swiss\"",
                " \"www[.]themedslots[.]com\"",
                " \"www[.]vgmabogado[.]com\"",
                " \"luwpywz1[.]web-enerflow[.]com\"",
                " \"bazipy[.]workers[.]dev\""
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
            "iocCount": 10685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10685,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                "da016d8c7ef2176f549cd35927d92a6d9cc9e253",
                "199e1fd0a2f1c805aae75b33803d0e27b874b892",
                "5df1d8183a0c35eed21884c00e84299ded6ece0c",
                "ad1e251a18db0657b238f75305b312593a6276a4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48265,
            "activeSources": 8,
            "criticalAlerts": 25256,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14604,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10652,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4228,
                "trend": "stable",
                "percentage": 1
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156",
                    "1[.]177[.]162[.]3"
                ]
            },
            {
                "name": "malware_download",
                "count": 13589,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://94[.]249[.]188[.]204/bins/arm5",
                    "hxxp://176[.]65[.]149[.]210/bins/arm",
                    "hxxp://94[.]249[.]188[.]204/bins/arm6"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1699,
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
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1304,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]134[.]34[.]85:8080\"",
                    " \"222[.]80[.]159[.]10:8443\"",
                    " \"111[.]228[.]49[.]20:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 767,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405",
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97"
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
                "count": 703,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 569,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"98[.]89[.]43[.]158:443\"",
                    " \"124[.]156[.]108[.]12:443\"",
                    " \"107[.]172[.]134[.]37:443\""
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
        "fastestRisingThreat": " \"win.asyncrat\"",
        "totalAttacksThisHour": 44026,
        "lastCalculated": "2026-09-11 00:35 IST"
    }
};
