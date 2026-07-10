// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-10T09:36:59.869430+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-10T09:36:59.544521+05:30",
    "lastUpdatedFormatted": "Jul 10, 2026 at 09:36 AM IST",
    "comparisonPeriod": "Jul 09 \u2013 Jul 10, 2026",
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
                "hxxps://messenger-clone-taupe[.]vercel[.]app/",
                "hxxps://www[.]messenger-clone-taupe[.]vercel[.]app/",
                "hxxp://zhongshujuan[.]com/",
                "hxxp://chatgpt0005[.]eu[.]org/blog/discord-patch-notes-october-7-2025",
                "hxxps://www[.]roblox[.]com[.]ml/games/15884350761/UPDATE-Bloody-Ragdoll-Engine-Remastered?privateServerLinkCode=145044208057261336158114392125"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 679,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5c01b3af2ca6b789a8006d902f738f81bb99c1696b352c1e6444fdd78b37cdcf",
                " \"b4d0f84e44a782b5c98c48a34a5442bde600f59e451a067f5ea28d3cbe528966",
                " \"36bd5ca4aaedc3d7f377de097ba915eaf4774fb07cb080aec7e5359c7128c1a6",
                " \"81438ec974a24527a4218f451214e4abeda74c6d112c2b2366571d1ba8eb700e",
                " \"53f0f718847c209a482f3fa3f52a5ce5245af57da1aa03ecb84d9c3133750955"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
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
                "1[.]159[.]146[.]128",
                "1[.]159[.]52[.]66",
                "1[.]192[.]177[.]87",
                "1[.]197[.]102[.]62",
                "1[.]199[.]131[.]5"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8956,
                "newInLastHour": 8956,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]203[.]20",
                "1[.]162[.]197[.]67",
                "1[.]162[.]226[.]31",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22287,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22287,
                "newInLastHour": 22287,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]187[.]33[.]138:33631/i",
                "hxxp://182[.]123[.]211[.]0:55917/i",
                "hxxp://105[.]187[.]33[.]138:33631/bin[.]sh",
                "hxxp://115[.]195[.]212[.]157:57971/i",
                "hxxp://222[.]137[.]23[.]22:54815/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4756,
                "newInLastHour": 4636,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cmdzspvk[.]btyek[.]cloud\"",
                " \"anubixfreedom001[.]duckdns[.]org\"",
                " \"38[.]54[.]61[.]225:80\"",
                " \"101[.]34[.]235[.]198:8443\"",
                " \"102[.]220[.]160[.]125:56793\""
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
            "iocCount": 10146,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10146,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "23267256640f8285cc77767082fe17ac0b8d23b0",
                "790c3281bc5b0087d59aaa1436e7516ca007fc07",
                "55f0fc964675706a15353d56745bb20d95213e53",
                "049209f78aca1e6715a706e00c56283134010135",
                "aaa8cad460677d3312a35ccfcf3235361ab9b7e4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46285,
            "activeSources": 8,
            "criticalAlerts": 24573,
            "activeCampaigns": 156
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23003,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3528,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1570,
                "trend": "down",
                "percentage": -84
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
                "count": 22277,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ggittwjb[.]irantop[.]bet/7dbe829f-08c8-41df-972c-dd2e4a9e97d1",
                    "hxxp://112[.]248[.]255[.]206:40693/i",
                    "hxxps://nkzajnx4[.]pablobet[.]bet/?ublib=5637b900-931b-44bf-b25e-47943c2785fa"
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
                    "1[.]12[.]229[.]231",
                    "1[.]157[.]105[.]181"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1631,
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
                "count": 1468,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"23[.]141[.]12[.]111:8080\"",
                    " \"23[.]141[.]12[.]111:80\"",
                    " \"47[.]105[.]36[.]109:80\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 493,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zurawealth[.]co[.]uk\"",
                    " \"waterchemstech[.]com\"",
                    " \"weallth[.]ai\""
                ]
            },
            {
                "name": "Vidar",
                "count": 431,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1e9d00de147af3c24b22721d8c18680150dad2d5",
                    "16e2a45afc9c237a463c23e14110aebb700085db",
                    "41fb7a086b442b60106c064b90f453aa98d0056b"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 390,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"216[.]9[.]225[.]38:14641\"",
                    " \"155[.]103[.]71[.]115:13507\"",
                    " \"13[.]70[.]174[.]70:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 320,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ggittwjb[.]irantop[.]bet\"",
                    " \"nkzajnx4[.]pablobet[.]bet\"",
                    " \"pablobet[.]bet\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"179[.]43[.]149[.]251:7443\"",
                    " \"peopletechrevolution[.]com[.]au\"",
                    " \"costaricaexplorations[.]org\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://sp0ct-belvor-biz-warnex-falqim[.]pages[.]dev/",
                    "hxxp://hsawtse[.]eu[.]cc/",
                    "hxxps://login-raiffeisen[.]info/blog/blog[.]php"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 59870,
        "lastCalculated": "2026-07-10 09:36 IST"
    }
};
