// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T17:37:48.109194+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T17:37:47.714676+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 05:37 PM IST",
    "comparisonPeriod": "Sep 11 \u2013 Sep 12, 2026",
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
                "hxxp://sp32ct-dalrex-biz-vornik-cesla[.]pages[.]dev/",
                "hxxps://vwwv-roblox[.]co/users/1515798849/profile",
                "hxxps://roblox[.]com[.]bo/communities/488688266/",
                "hxxp://intrepid-amused-analysts--vdsbwa[.]replit[.]app/",
                "hxxp://www[.]your-order-logistics-global-tracking[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 704,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fe139dddaabb850d8a135378d2025ec59bfd02b707a5867fd64a23fc9a725169",
                " \"8cd2fdfbdbdaa514f6699d922211769118645eabb95fbd04a647e6422a07aece",
                " \"ee4f1241c66899398aa7ce9d70e8eea6911f26be816389622bdbc9c4352d9c30",
                " \"4c076ec5082d9acc905e97253a6f6c58b2b86844984d5a208f5283226b05bb00",
                " \"162f939b74f58825d222cccacfa3c122aba70dc39a6338d78919980ec23ff4a6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1704,
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
                "1[.]10[.]172[.]57",
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]188[.]100[.]134",
                "1[.]191[.]146[.]116"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11273,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11273,
                "newInLastHour": 11273,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12618,
                "newInLastHour": 12618,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]14[.]197:47791/bin[.]sh",
                "hxxp://62[.]60[.]226[.]140/files/7299809293/yTjGAos[.]exe",
                "hxxp://123[.]5[.]135[.]197:52455/i",
                "hxxp://123[.]5[.]135[.]197:52455/bin[.]sh",
                "hxxp://42[.]180[.]12[.]27:48431/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15367,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 15367,
                "newInLastHour": 11360,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"flexpaydev2[.]wpengine[.]com\"",
                " \"192[.]3[.]198[.]23:5130\"",
                " \"139[.]59[.]168[.]101:8080\"",
                " \"6e023wyi[.]bossbey[.]store\"",
                " \"bossbey[.]store\""
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
            "iocCount": 10410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10410,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                "00095e3cd5dfc929d16036132665d7e3e9ef7cd6",
                "0a1192b7efc4408315bb36a29eaa149bf2306e0c",
                "031491e9d9e07391f330aef5bbdce9febbf1fe90",
                "b43fde87eccd529d630ac6c5aa28931a3e6d52bf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54282,
            "activeSources": 8,
            "criticalAlerts": 23968,
            "activeCampaigns": 273
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13320,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10648,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4489,
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
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]111[.]86",
                    "1[.]165[.]229[.]216"
                ]
            },
            {
                "name": "malware_download",
                "count": 12413,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]226[.]209[.]82:46014/i",
                    "hxxp://193[.]178[.]158[.]107/bin/46d0be2a38b04583_syshost_loader[.]exe",
                    "hxxp://105[.]184[.]139[.]80:45613/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3938,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:8818\"",
                    " \"158[.]94[.]209[.]209:3009\"",
                    " \"105[.]101[.]131[.]181:7777\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1908,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"habibnco[.]com\"",
                    " \"herbal-field[.]com\"",
                    " \"iwcbombaynorth[.]org\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1722,
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
                "name": " \"js.iclickfix\"",
                "count": 1477,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"authshipup[.]net\"",
                    " \"runtimerailbit[.]com\"",
                    " \"servicestatlab[.]com\""
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
                "count": 1412,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]145[.]61[.]81:8080\"",
                    " \"8[.]145[.]61[.]81:80\"",
                    " \"8[.]145[.]61[.]81:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 979,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cdn-rcs-cloud[.]beer\"",
                    " \"coba[.]rs\"",
                    " \"1uysxtcp[.]bizne[.]store\""
                ]
            },
            {
                "name": "Vidar",
                "count": 769,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 50621,
        "lastCalculated": "2026-09-12 17:37 IST"
    }
};
