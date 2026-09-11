// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-11T18:17:32.497956+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-11T18:17:32.140007+05:30",
    "lastUpdatedFormatted": "Sep 11, 2026 at 06:17 PM IST",
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
                "hxxps://suport-coinsquare[.]zapier[.]app/portal",
                "hxxps://view-coisquared[.]zapier[.]app/started",
                "hxxp://protecpackonlinedocument-ymafg[.]ondigitalocean[.]app/",
                "hxxps://view-coisquared[.]zapier[.]app/",
                "hxxps://tavzavo-kxt-qelmora-r9t1hk63[.]pages[.]dev/home[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1023,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1023,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ccefe9acb00af5bfc11701b390e8e0dac713ab289a516be091a71a3a0a63a9ba",
                " \"fee7c4c3ec9a9c65a12a8e4aa425618216476729779530c37b8da2dd570dd4ea",
                " \"c48688e58baebab464a87519cc98b0184f1368977429891f3b3b08ce4afa5eea",
                " \"48b3bb8bbc6af681852437f83cd3ccdb1675829ddfc5dfacb1f19802654c8915",
                " \"d8b534a83cdc22cff118e2e4b934562ba1353ac35cdebf63b64acfe5399611c8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
                "newInLastHour": 62,
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
                "1[.]159[.]111[.]86",
                "1[.]177[.]162[.]2",
                "1[.]183[.]41[.]170",
                "1[.]192[.]109[.]94",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5300,
                "newInLastHour": 5300,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]174[.]197[.]92",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12889,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12889,
                "newInLastHour": 12889,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]95[.]20[.]161:56609/i",
                "hxxp://112[.]248[.]185[.]61:49152/i",
                "hxxp://196[.]191[.]233[.]24:60009/i",
                "hxxps://awarenessexhibition[.]com/img_125529[.]png",
                "hxxp://117[.]95[.]20[.]161:56609/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12223,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12223,
                "newInLastHour": 8461,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"escapeai[.]live\"",
                " \"hxxps://redirectwebpage[.]online\"",
                " \"unavailablerobot[.]online\"",
                " \"redirectwebpage[.]online\"",
                " \"hxxps://unavailablerobot[.]online\""
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
            "iocCount": 10568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10568,
                "newInLastHour": 289,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0a1192b7efc4408315bb36a29eaa149bf2306e0c",
                "031491e9d9e07391f330aef5bbdce9febbf1fe90",
                "b43fde87eccd529d630ac6c5aa28931a3e6d52bf",
                "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                "da016d8c7ef2176f549cd35927d92a6d9cc9e253"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53169,
            "activeSources": 8,
            "criticalAlerts": 24147,
            "activeCampaigns": 267
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13770,
                "trend": "stable",
                "percentage": -7
            },
            {
                "category": "C2",
                "count": 10377,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4276,
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
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]111[.]86"
                ]
            },
            {
                "name": "malware_download",
                "count": 12644,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]224[.]192[.]6:34023/bin[.]sh",
                    "hxxp://115[.]56[.]157[.]163:33718/i",
                    "hxxp://125[.]41[.]2[.]160:45493/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3832,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:6661\"",
                    " \"84[.]247[.]187[.]47:8115\"",
                    " \"62[.]171[.]148[.]175:6606\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1671,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rulinz[.]com\"",
                    " \"showroomglobal[.]com\"",
                    " \"k-eternal[.]ai\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1653,
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
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1297,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]144[.]136[.]97:80\"",
                    " \"114[.]132[.]180[.]69:3389\"",
                    " \"111[.]228[.]5[.]127:5435\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 1062,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fvo5vl1w[.]everythingisephemere[.]com\"",
                    " \"7zs7j32p[.]enus-zensulin[.]com\"",
                    " \"7ws36ony[.]us-thetrumptoken[.]com\""
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
                "name": " \"js.iclickfix\"",
                "count": 728,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]zago[.]it\"",
                    " \"zenteambuilding[.]com\"",
                    " \"member[.]fames[.]my\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42382,
        "lastCalculated": "2026-09-11 18:17 IST"
    }
};
