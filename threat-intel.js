// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-30T10:53:51.858027+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-30T10:53:51.594411+05:30",
    "lastUpdatedFormatted": "Sep 30, 2026 at 10:53 AM IST",
    "comparisonPeriod": "Sep 29 \u2013 Sep 30, 2026",
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
                "hxxps://gm[.]cvouab[.]com/xyz/Adobe_Installer[.]html",
                "hxxps://fseryy[.]pages[.]dev/b?ld=AZUSSOA-seemore&node=18190131011&ref_=footer_seemore",
                "hxxps://luxora[.]qpon/AdobeInstaller[.]html",
                "hxxps://nabwardsprogramas[.]top/hZ1eIVZZ7n",
                "hxxp://sites[.]google[.]com/view/yvgfnnhfjw02/accueil"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1269,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1269,
                "newInLastHour": 145,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f904eca10c253c1cfc8f9e44c8c21360c4857f7967ef591db8910e0e44985fe6",
                " \"f04343dea19a7571b3a7bb3e523b9d32d8e50d58201e60e7770e4a72648fbe64",
                " \"981462933077e0ceece8b21dc32faf8f292e8ff878ae0e342eec0229e1b57d8c",
                " \"334787dcea96690e2816b16ac6f5f02771c29ffcb691832dcc154a201e473a5c",
                " \"7ccc09334c38cabc95ba4eb5ba41faa6167dbdff9faf23105b3c92e98f803774"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1659,
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
                "1[.]117[.]171[.]170",
                "1[.]12[.]229[.]231",
                "1[.]24[.]16[.]103",
                "1[.]24[.]16[.]107",
                "1[.]24[.]16[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5423,
                "newInLastHour": 5423,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]162[.]248[.]139",
                "1[.]2[.]187[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15090,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15090,
                "newInLastHour": 15090,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]96[.]141[.]187:33588/i",
                "hxxp://42[.]224[.]194[.]138:58573/i",
                "hxxp://42[.]224[.]252[.]148:51347/i",
                "hxxps://rough-glade-bfc8[.]pentagon-e8b[.]workers[.]dev/deps/fabric-api/fabric-api-0[.]136[.]1%2B1[.]21[.]8[.]jar",
                "hxxp://182[.]127[.]123[.]209:40669/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6762,
                "newInLastHour": 6276,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]96[.]176[.]28:443\"",
                " \"120[.]27[.]155[.]171:80\"",
                " \"120[.]27[.]155[.]171:8080\"",
                " \"120[.]27[.]155[.]171:443\"",
                " \"beravejy[.]workers[.]dev\""
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
            "iocCount": 10733,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10733,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5b60c9c03e269395e5900a70dc9121c44164a271",
                "5cf0d65dab7decdfdf1ae7d08e3d1a3696eee2b3",
                "317bcdde2a44975381c24cb95bfcc5c3132e64c5",
                "a2e76af14703e85cc8a27f108e0ee93ce2d9afb4",
                "c234496c7b0abcd873bb6bb5a54288b6d340b6ff"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52087,
            "activeSources": 8,
            "criticalAlerts": 27390,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16569,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10821,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4508,
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
                "count": 15311,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://154[.]223[.]128[.]222:54472/bin[.]sh",
                    "hxxp://185[.]39[.]181[.]103:35427/i",
                    "hxxp://42[.]180[.]85[.]86:44269/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1693,
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
                "count": 1456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37",
                    "81c9eddccea61f8fa9788208189d79b82e3443a4"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]6[.]11[.]231:7777\"",
                    " \"31[.]56[.]209[.]140:6606\"",
                    " \"104[.]219[.]238[.]196:443\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1347,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"104[.]143[.]204[.]78:8443\"",
                    " \"156[.]239[.]4[.]189:50050\"",
                    " \"aaed196675895fcb5816edf09b0cb120\""
                ]
            },
            {
                "name": "Vidar",
                "count": 806,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
                    "605e0b79c4a685b7da9524d6b71ec36bbd651b07",
                    "5f5d3a3225006f45ff8194536ef8e09cb194884d"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 801,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8f80af4c564e3e40d664d46956e30958b0864f9e1255dede9055144c878de7a9\"",
                    " \"thebeyondparadise[.]com\"",
                    " \"roofer-sutton[.]co[.]uk\""
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
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf",
                    "8410f92dc9367bda715790bb163d32111731527d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 42239,
        "lastCalculated": "2026-09-30 10:53 IST"
    }
};
