// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-06T02:51:37.982775+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-06T02:51:37.691912+05:30",
    "lastUpdatedFormatted": "Aug 06, 2026 at 02:51 AM IST",
    "comparisonPeriod": "Aug 05 \u2013 Aug 06, 2026",
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
                "hxxp://site-7lhik3ohd[.]godaddysites[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/471184536693/profile",
                "hxxps://paidopinion[.]xyz/",
                "hxxps://coinvasxtension[.]webflow[.]io/",
                "hxxp://fortcheck[.]club/id/login"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1184,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1184,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f3b6e9ff3bb913d481943f6eb5a664f07fdb182f90a94ba06b787800aab34cc4",
                " \"042c70369a491770cd5795b024d67a3ea2bd851f32dc47bfd96440c57d0498e6",
                " \"6c3e891c88b71d2cfde888c389172cbfed25cc5ae7a97f8273279914785172fe",
                " \"cff23479efa73587cdc2ef115a4e90e8e8487e3eb4c8e4566f36ab606f8714c5",
                " \"dc9d4d94549c878c392d0ceee8bdb84f459ea97d395d46446d7bbcb8ba16a23c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1667,
                "newInLastHour": 4,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]82[.]219",
                "1[.]178[.]120[.]110"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5190,
                "newInLastHour": 5190,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49",
                "1[.]20[.]228[.]110",
                "1[.]204[.]201[.]198"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15611,
                "newInLastHour": 15611,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]44[.]60[.]121:45542/i",
                "hxxp://123[.]5[.]126[.]137:60939/bin[.]sh",
                "hxxp://115[.]49[.]131[.]148:60155/bin[.]sh",
                "hxxp://105[.]186[.]85[.]41:52445/bin[.]sh",
                "hxxp://115[.]63[.]54[.]54:51962/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4348,
                "newInLastHour": 4260,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"8[.]145[.]52[.]37:5222\"",
                " \"42[.]193[.]228[.]200:8080\"",
                " \"89[.]116[.]220[.]116:3232\"",
                " \"bnxrnoc[.]revivebyviv[.]com\"",
                " \"pjzmil[.]sim-trucking[.]com\""
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
            "iocCount": 10229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10229,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "01cc79c660e1677fc17665e6d8169b5fdad75668",
                "5dcd3232fc9873ebedca38f8ba5992fce6dccb61",
                "3ddf56dd624309d956cccb6c41eb6fcfbb3c6364",
                "ded1fe95801f3c3fd8a1c73360fbaef6697bcf34",
                "30ae51f106a573be769968e15c0a6f56a2878a16"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48439,
            "activeSources": 8,
            "criticalAlerts": 27109,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16816,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10293,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3676,
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
                "name": "malware_download",
                "count": 15599,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]202[.]25[.]231:36878/bin[.]sh",
                    "hxxp://42[.]85[.]239[.]3:46645/i",
                    "hxxp://175[.]9[.]132[.]112:50484/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1674,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1368,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"111[.]170[.]148[.]141:8082\"",
                    " \"169[.]58[.]82[.]229:3306\"",
                    " \"54[.]178[.]100[.]27:22\""
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
                "count": 694,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 667,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
                    "964d86f575c50b29d2b7157331d556859dd43e5e"
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
                "name": " \"Mirai",
                "count": 498,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6246b9d1b2ebc13656fbd9f45d240d12d5b969ba3889af847f20aa15d0254dce",
                    " \"e6b0f936dcf68722d1e41a0b2be451fdb77ba0fb95542f7d866fda72f18d64fd",
                    " \"57d3bb540b754e9fbcaf5f5c49204c1814a07864856a8740bb43716cc8a253b1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40379,
        "lastCalculated": "2026-08-06 02:51 IST"
    }
};
