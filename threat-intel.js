// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-12T23:16:39.030075+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-12T23:16:38.659583+05:30",
    "lastUpdatedFormatted": "Oct 12, 2026 at 11:16 PM IST",
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
                "hxxp://ig-larpcentral[.]vercel[.]app/",
                "hxxps://thr-shopee933[.]blogspot[.]com/",
                "hxxps://shopee-jkt1777[.]blogspot[.]com/",
                "hxxps://uphold-apps-lusg[.]webflow[.]io/",
                "hxxps://track-93s[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 960,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 960,
                "newInLastHour": 394,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e42788c4b558f14062f1fbea269c1694ad34c6c2136890289d3ec33494c1cd67",
                " \"7e9fa00a2d3224c15c3d15a8aea4590d5e257d63cd51b0f92ab1eb85af19db04",
                " \"c44394ab13d7e312695895b890bc5e5f19b87f102949b96c2a47d8dbbb512fde",
                " \"c816086928c4b4f7e8292c9ab969aef5216b2509cffa377d4b44dbdaa82eb8ce",
                " \"5ba39dba8084612cebda15799ee598eb59d2321bf0a62b7d3178071760459155"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1599,
                "newInLastHour": 56,
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
                "1[.]14[.]149[.]30",
                "1[.]145[.]29[.]140",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4707,
                "newInLastHour": 4707,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]2[.]225[.]235",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33740,
                "newInLastHour": 33740,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]186[.]118[.]157:54387/bin[.]sh",
                "hxxp://117[.]235[.]146[.]45:60112/bin[.]sh",
                "hxxp://117[.]26[.]227[.]112:44031/bin[.]sh",
                "hxxp://222[.]241[.]234[.]107:50704/i",
                "hxxp://125[.]106[.]96[.]203:56709/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6173,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6173,
                "newInLastHour": 5596,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://74[.]208[.]248[.]39/\"",
                " \"hxxps://updates[.]howclens[.]com/\"",
                " \"hxxps://metricairdrop[.]cfd/\"",
                " \"fubavy[.]workers[.]dev\"",
                " \"bc89919d6c97fcffaee26b92a8ec84d9bc59a7d3cbb2eaa898de45c8eae832bd\""
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
            "iocCount": 10853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10853,
                "newInLastHour": 8628,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "629700c6fb58a48ce5c34e9e830225fad3e62634",
                "6ae4974b641caa8b6aae8d3392e7fb4f8c7e3577",
                "245f189a60a8b20a5dc562134b3d55d6539ac186",
                "ab1d61a4f4692b105daa345a7185119f0d29cb79",
                "9769dce57ee77a6da94da9c824cd923cb9599892"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58595,
            "activeSources": 8,
            "criticalAlerts": 35922,
            "activeCampaigns": 191
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33586,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4548,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 2336,
                "trend": "down",
                "percentage": -78
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
                "percentage": 1
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
                "count": 32834,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]141[.]79[.]86:47396/i",
                    "hxxp://42[.]235[.]49[.]252:47197/i",
                    "hxxp://183[.]35[.]50[.]12:38590/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]63[.]19"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1626,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]136[.]92[.]170:443\"",
                    " \"43[.]136[.]92[.]170:80\"",
                    " \"118[.]126[.]95[.]117:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 620,
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
                "name": " \"unknown\"",
                "count": 465,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://skynetwork[.]lat/\"",
                    " \"hxxps://therstronks-exchrange[.]lat/rewards\"",
                    " \"hxxp://101[.]43[.]115[.]8:7777/?h=101[.]43[.]115[.]8&p=7777&t=ws&a=w32&stage=true\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 422,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://vok[.]6666k[.]org\"",
                    " \"hxxps://koi[.]6666k[.]org\"",
                    " \"koi[.]6666k[.]org\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 422,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8054026c22d6f84e6d6040d704a8f759e8364575df5ad03ef72d3f981262bee3\"",
                    " \"4ef6c9f88c03e3ef71a6402d93b41a437cbecd632f06ed78116ac68bfe09abe4\"",
                    " \"qh88[.]navy\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 407,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"889f9f66e43430fa4fe696dd50912f555eb0b8e998942e7918b0561e01883dbe",
                    " \"cc0e9d0184c0b930381446b6891769a35711b38c6a57303482e3115f921d4edc",
                    " \"fae726c464f67b0698f76139bf4b41f871a1fc59fe1bfd8856a030e48cddf508"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 68426,
        "lastCalculated": "2026-10-12 23:16 IST"
    }
};
