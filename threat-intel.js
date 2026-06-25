// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-25T23:52:18.992874+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-25T23:52:18.698579+05:30",
    "lastUpdatedFormatted": "Jun 25, 2026 at 11:52 PM IST",
    "comparisonPeriod": "Jun 24 \u2013 Jun 25, 2026",
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
                "hxxps://secure-trzo-start-us[.]square[.]site/",
                "hxxps://www[.]roblox[.]com[.]bi/games/105742951729183/Race-Your-Lucky-Block?game_id=105742951729183&game_name=Race-Your-Lucky-Block&privateServerLinkCode=29383763406896541593443970804931",
                "hxxps://sso-security[.]com/E[.]AW1oEMC7jst1yas?=userid",
                "hxxp://codebulletin[.]github[.]io/Facbook-Login-Page-Clone",
                "hxxps://www[.]croatiapools[.]com/DK/DKB/dkb/login[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 545,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e79cdaca77eecfa7a942c5392bdd9fd8dd238343b0ba0cc7fd7a79da1eeff450",
                " \"e62e3db06935e2d8cabb668212d86978d6ba43f6a677518e9aae44c77998e88e",
                " \"d1670db20be1da30e35c4220409078e9631a3319ce934a03a8c5866d118cf00e",
                " \"56e376fe961db08c622c70a25200a89bec93290bba54f33f9577e3721e05323b",
                " \"51e8c44dc4ea54d5ee6909c0eb19a829ab4f6dca9de7028dc2a081556bd2e056"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
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
                "1[.]11[.]228[.]4",
                "1[.]119[.]194[.]226",
                "1[.]159[.]114[.]184",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4429,
                "newInLastHour": 4429,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]15[.]135[.]116",
                "1[.]15[.]221[.]192",
                "1[.]15[.]227[.]58",
                "1[.]162[.]239[.]42"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22797,
                "newInLastHour": 22797,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]39[.]241[.]60:52053/bin[.]sh",
                "hxxp://115[.]52[.]70[.]16:55222/i",
                "hxxp://190[.]109[.]227[.]30:55441/i",
                "hxxps://t1x1vby3[.]ahkam[.]xyz/?ublib=df01d0ba-2a5b-4f55-8fb3-0b5ec3fa9e29",
                "hxxp://server-830796[.]thatserver[.]com/Q24I"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4471,
                "newInLastHour": 4161,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"130[.]94[.]59[.]160:443\"",
                " \"52[.]86[.]125[.]111:443\"",
                " \"47[.]237[.]102[.]71:6667\"",
                " \"38[.]207[.]179[.]133:8002\"",
                " \"23[.]227[.]199[.]61:443\""
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
            "iocCount": 10072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10072,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe",
                "03574e3801865919645fe101df0b05cf1cd75859",
                "0de71d162acb75d41aa2573e75c211deaa50024e",
                "0133a9e8f0aa0adfee0fc928bb41866fb44c2357"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46144,
            "activeSources": 8,
            "criticalAlerts": 24812,
            "activeCampaigns": 155
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23317,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3435,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1495,
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
                "count": 22743,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]106[.]220:37406/i",
                    "hxxp://server-830796[.]thatserver[.]com/pFdY",
                    "hxxp://27[.]44[.]144[.]166:41763/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]159[.]114[.]184",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1636,
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
                "count": 1442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]93[.]224:443\"",
                    " \"172[.]245[.]57[.]227:443\"",
                    " \"124[.]222[.]218[.]12:4848\""
                ]
            },
            {
                "name": "Vidar",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e",
                    "29e911278a8f4291b3db0684b0ea6a31c6accc9a"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 325,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]38[.]129[.]31:8085\"",
                    " \"84[.]38[.]129[.]31:9095\"",
                    " \"5[.]101[.]84[.]82:9521\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://secure-trzo-start-us[.]square[.]site/",
                    "hxxps://www[.]roblox[.]com[.]bi/games/105742951729183/Race-Your-Lucky-Block?game_id=105742951729183&game_name=Race-Your-Lucky-Block&privateServerLinkCode=29383763406896541593443970804931",
                    "hxxps://sso-security[.]com/E[.]AW1oEMC7jst1yas?=userid"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 281,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]mb8coin[.]io\"",
                    " \"sofin[.]io\"",
                    " \"logitron[.]io\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 278,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]236[.]92[.]210:60000\"",
                    " \"221[.]132[.]16[.]23:60000\"",
                    " \"hxxps://betterment-us[.]comalign[.]pro/betterment/wwws/betterment/app/login/secure[.]html\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 271,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://y14[.]fileboro[.]com/\"",
                    " \"y14[.]fileboro[.]com\"",
                    " \"y14[.]hopesm188[.]top\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 55374,
        "lastCalculated": "2026-06-25 23:52 IST"
    }
};
