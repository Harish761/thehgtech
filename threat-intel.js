// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-18T17:26:08.849386+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-18T17:26:08.608269+05:30",
    "lastUpdatedFormatted": "Jun 18, 2026 at 05:26 PM IST",
    "comparisonPeriod": "Jun 17 \u2013 Jun 18, 2026",
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
                "hxxps://hnghnff[.]weebly[.]com/",
                "hxxps://seggbhd--segbh[.]replit[.]app/",
                "hxxps://kopaturismo[.]com[.]br/ase/saveenergy_09343[.]html",
                "hxxps://factorlink[.]mediart[.]cl/afcuuj/tmpvqwertyuiolkjhgfdsadfghjkbvcdsertyuikmnbvcdswertyuioiuytrertyujhgvfgbnjhbvcxvbnmnbvfcdertmkiopiuytrewq[.]php/",
                "hxxps://www[.]roblox[.]com[.]ml/users/124224446839/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 819,
                "newInLastHour": 211,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db72a8e1b8dde1130633bee725f093225117e30026aa008f595d374c967da8fd",
                " \"fa235e07fffc31425cb2d77f6efd414e5dd239ee2ffef87ed9696892182167a2",
                " \"cd7d8c91fde82da2353cb3fc0525c83b7648ad72db2c31fe067551debc0aeb47",
                " \"728064505b2229fcf28688292722a204e3098618692718eb64fb1707d70ed279",
                " \"b834f96b09a020e35a370168f0c8a399ef67501a1250c90beb7ecb7e1e0e0f22"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 49,
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
                "1[.]10[.]185[.]224",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236",
                "1[.]176[.]118[.]246",
                "1[.]176[.]134[.]235"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5977,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5977,
                "newInLastHour": 5977,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]229[.]57",
                "1[.]15[.]135[.]116",
                "1[.]15[.]32[.]131",
                "1[.]162[.]223[.]232",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17021,
                "newInLastHour": 17021,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://small-morning-8be0[.]fsocietyandtools[.]workers[.]dev/J0YH-KEUX-J9ID-2I7M/img_8omacp[.]png",
                "hxxps://gitea[.]nightcord[.]st/nightcord/nightcord/releases/download/v1[.]20[.]0/Nightcord-Installer[.]exe",
                "hxxps://xeno[.]lat/download/Xeno-v1[.]3[.]55[.]zip",
                "hxxps://gitea[.]nightcord[.]st/nightcord/nightcord/releases/download/v1[.]19[.]9/Nightcord-Installer[.]exe",
                "hxxp://163[.]142[.]95[.]23:60470/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3883,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3883,
                "newInLastHour": 3639,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"188[.]227[.]14[.]105:547\"",
                " \"oxidbetkade[.]online\"",
                " \"lnc1c2cf[.]anodaz[.]vip\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/arinao7/8327ac99-c06c-422f-bd2e-4a80978d52c9/api-45\"",
                " \"022iqw23[.]bet303[.]download\""
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
            "iocCount": 9993,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9993,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "487963ef755a226940a6b402895cc6cfe8ed2594",
                "010a6503f80cc4ae9d2cf4bc58b96754f8979a2b",
                "aa5491d3ac54bf6004f7b74c72ba71a18367773a",
                "27444283cb0b64a2a46f818afffc657a4fd4817b",
                "653a0e0eafd93c71a0363a99f55c8537a23843dc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39695,
            "activeSources": 8,
            "criticalAlerts": 18837,
            "activeCampaigns": 158
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17428,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 3002,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1409,
                "trend": "down",
                "percentage": -85
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16672,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]4[.]199[.]145:36870/i",
                    "hxxp://123[.]11[.]73[.]252:39018/bin[.]sh",
                    "hxxp://110[.]36[.]86[.]0:57669/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]159[.]13[.]9",
                    "1[.]164[.]110[.]70"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"62[.]113[.]59[.]64:443\"",
                    " \"106[.]13[.]189[.]138:56000\"",
                    " \"221[.]132[.]29[.]137:81\""
                ]
            },
            {
                "name": "Vidar",
                "count": 397,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d",
                    "3c94f5e78cc03430f78033b240e6c065c5937c6a",
                    "54fdaf6635064f8d7e6f84b1118eb60edcc697e8"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 375,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]110[.]80[.]154:7443\"",
                    " \"95[.]85[.]239[.]146:3000\"",
                    " \"154[.]86[.]119[.]78:80\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 306,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2f485c14c285244e94c7765c8630c81d499a18e7362183d9ed2ba84b78534fab",
                    " \"1f39c8540b90f72b502602ab253695380fd4ed7108209f7a84fd87e3d705fe29",
                    " \"ce60455ea0b6df39ae07f162abb0eb43fce9d953d694bb3b8b21f66fd86663df"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://hnghnff[.]weebly[.]com/",
                    "hxxps://seggbhd--segbh[.]replit[.]app/",
                    "hxxps://kopaturismo[.]com[.]br/ase/saveenergy_09343[.]html"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"taivvans[.]ydns[.]eu\"",
                    " \"taivvan[.]ydns[.]eu\"",
                    " \"96[.]44[.]167[.]215:14649\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 269,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://voltrix[.]lol/Beta/Voltrix[.]zip\"",
                    " \"hxxps://bebra-dev[.]pro/Bebra[.]zip?v=1781701742050&r=34m3tk\"",
                    " \"hxxps://motido[.]lol/downloads\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50791,
        "lastCalculated": "2026-06-18 17:26 IST"
    }
};
