// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-18T18:04:32.481818+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-18T18:04:31.999345+05:30",
    "lastUpdatedFormatted": "Oct 18, 2026 at 06:04 PM IST",
    "comparisonPeriod": "Oct 17 \u2013 Oct 18, 2026",
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
                "hxxp://www[.]roblox[.]ly/users/1036952856/profile",
                "hxxp://digitley-dhl[.]azurewebsites[.]net/login",
                "hxxps://www[.]roblox[.]com[.]ml/games/9872472334/HLWN-Evade?privateServerLinkCode=384328757637766641742433182819",
                "hxxps://tiktokvip[.]cyou/",
                "hxxp://rss2[.]sayler[.]at/go/z2b4u2/z274y274"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 906,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ff2b8a9b66704fae8df6f985888327ed26bdcd70a260d728964f674395b1627b",
                " \"3984f407c863bc293d0b733b31f5366461b237f129371986ecd142050abd190e",
                " \"d46a3cca1520e40280b7e6657b8ec42b0ceda2d645ca441d775554b5090ba621",
                " \"a3b5c087ed644af206249b9a16ed6632b9bdb967d7b8fe2a988dd54e0b82b1bd",
                " \"a3ee98244ebab62c277615704759088bbd23ffdfe872067ed19408f0280fa2c6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
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
                "1[.]117[.]58[.]215",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4389,
                "newInLastHour": 4389,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]23[.]83"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33512,
                "newInLastHour": 33512,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://cdk[.]monther[.]life/DvnX[.]zip",
                "hxxp://64[.]235[.]41[.]83/AI",
                "hxxp://178[.]132[.]198[.]200/bins[.]sh",
                "hxxp://182[.]127[.]127[.]58:40976/bin[.]sh",
                "hxxp://182[.]119[.]34[.]172:33099/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7447,
                "newInLastHour": 5999,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://xw[.]9win[.]cyou/qk/\"",
                " \"80[.]78[.]28[.]56:31337\"",
                " \"140[.]143[.]193[.]143:443\"",
                " \"hxxps://xw[.]9win[.]cyou/wj/\"",
                " \"hxxp://182[.]117[.]28[.]216:45408/Mozi[.]m\""
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
            "iocCount": 10997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10997,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38151a6b2438b2b645a27a891e1e15786f11a783",
                "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "b97f1ae860fce04e1aae480e10b884da9826b17b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69742,
            "activeSources": 8,
            "criticalAlerts": 45321,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34394,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10927,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4882,
                "trend": "stable",
                "percentage": -4
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
                "count": 33452,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]140[.]227[.]97:55257/bin[.]sh",
                    "hxxp://94[.]137[.]37[.]252:3344/i",
                    "hxxp://125[.]42[.]26[.]110:42454/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1258,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]109[.]103[.]59:443\"",
                    " \"47[.]109[.]103[.]59:80\"",
                    " \"8[.]212[.]181[.]6:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 835,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7ef960d6cfa5bae388a927a5e20f9238bcb22f92",
                    "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                    "09545cca9c36c76f4982c4b648041a1606799b53"
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
                "count": 718,
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
                "name": " \"elf.mirai\"",
                "count": 690,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1f7a31315c822ea415d628c73a24bae47c191b1a933e3672bc7d7eec46fdc98b\"",
                    " \"92f88702978ff7ddcff3a6b57b2a58fe6c17cb099110d73bb14767c35f1c3a0f\"",
                    " \"79470e722fcc76b61df510b3053dc645bdd7715ff719dbfab79e4f51511f278f\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 674,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://v[.]9win[.]cyou/f/\"",
                    " \"hxxps://v[.]9win[.]cyou/ug/\"",
                    " \"hxxps://v[.]9win[.]cyou/pa/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.tofsee\"",
        "totalAttacksThisHour": 59276,
        "lastCalculated": "2026-10-18 18:04 IST"
    }
};
