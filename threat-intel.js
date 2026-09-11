// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T00:37:56.609771+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T00:37:56.238760+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 12:37 AM IST",
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
            "iocCount": 914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 914,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"215b007c765f36722e640e9195cf05a2e9a185e82b83b343fab959a73d7c5234",
                " \"e5eba0c505759a2ddd4a03332caf54ee531a062dacf19c12c015221ab3065aad",
                " \"5bea5af5215089d97749d438351d7288310d0b8a472616edbe1b34168ad1001c",
                " \"308709b502a8ab2c7949b8c8dca32b63ccbe629911e933e7a025c790060be8b3",
                " \"73ef49ae844b024dc84215f6a00d22e0cf9f19c244003100fdafa76ce55c3b82"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1662,
                "newInLastHour": 29,
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
                "1[.]145[.]32[.]156",
                "1[.]177[.]162[.]2",
                "1[.]181[.]200[.]22",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5290,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5290,
                "newInLastHour": 5290,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]174[.]197[.]92",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12937,
                "newInLastHour": 12937,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]231[.]207[.]203:40714/i",
                "hxxp://123[.]190[.]27[.]84:51494/i",
                "hxxp://168[.]119[.]85[.]190/bash[.]sh",
                "hxxp://176[.]9[.]88[.]12/miner",
                "hxxp://103[.]171[.]168[.]74:33809/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12681,
                "newInLastHour": 8606,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]62[.]126:8074\"",
                " \"154[.]91[.]62[.]125:8074\"",
                " \"154[.]91[.]58[.]104:8074\"",
                " \"154[.]91[.]62[.]122:8074\"",
                " \"154[.]91[.]58[.]111:8074\""
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
            "iocCount": 10662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10662,
                "newInLastHour": 120,
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
            "totalIndicators": 53701,
            "activeSources": 8,
            "criticalAlerts": 24485,
            "activeCampaigns": 274
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13939,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10546,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4384,
                "trend": "stable",
                "percentage": 2
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
                    "1[.]159[.]111[.]86",
                    "1[.]177[.]162[.]2",
                    "1[.]183[.]41[.]170"
                ]
            },
            {
                "name": "malware_download",
                "count": 12889,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]95[.]20[.]161:56609/i",
                    "hxxp://112[.]248[.]185[.]61:49152/i",
                    "hxxp://196[.]191[.]233[.]24:60009/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3837,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:7707\"",
                    " \"69[.]10[.]49[.]136:7777\"",
                    " \"adf038a93db8e4257045c826597a787260c653d8\""
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
                "name": " \"unknown_loader\"",
                "count": 1673,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"orbittrack[.]cfd\"",
                    " \"2a9c16b7fe5a7a1eda5ac040264e8a6975c4e01d43b7b4dc8a57b1077d29d4f7\"",
                    " \"e857298fd2f8d1c7d48780769433f33e7b3ceaae5ea5a74c13ce8c10bcc7b690\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1441,
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
                "count": 1401,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"111[.]228[.]49[.]20:8080\"",
                    " \"111[.]228[.]49[.]20:3389\"",
                    " \"109[.]236[.]50[.]145:995\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 920,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://redirectwebpage[.]online\"",
                    " \"unavailablerobot[.]online\"",
                    " \"redirectwebpage[.]online\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 748,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"relmciarnlioix[.]life\"",
                    " \"www[.]zago[.]it\"",
                    " \"zenteambuilding[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 746,
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 42352,
        "lastCalculated": "2026-09-12 00:37 IST"
    }
};
