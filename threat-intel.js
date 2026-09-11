// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T03:59:59.097728+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T03:59:58.728051+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 03:59 AM IST",
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
            "iocCount": 870,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 870,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"774a531c6b2a7a6a10f94fcc74649dd6a20e79b7e06dae532c49e8b1fcf84c2f",
                " \"923dbede92d58d7c58199c91b8f6cbdafdd938337889879e8ec366c1bf4d0577",
                " \"2250189b2c5c24f38393267d6e2a53ee7bf6068ce89dc16c27585831951d0b1f",
                " \"d3d007c14bda781264dd314938122f6c7d3b772d5870787cfbaa992d4c251c61",
                " \"985cf05a00486d49bf1047e1071c4c47c15873dc3da4bb10fc444ffe48f32e3b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1722,
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
                "1[.]12[.]229[.]231",
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]159[.]111[.]86",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5191,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5191,
                "newInLastHour": 5191,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12958,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12958,
                "newInLastHour": 12958,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]189[.]101[.]82:48478/i",
                "hxxp://196[.]189[.]130[.]28:60910/bin[.]sh",
                "hxxp://196[.]189[.]101[.]82:48478/bin[.]sh",
                "hxxp://119[.]165[.]254[.]83:53777/bin[.]sh",
                "hxxp://221[.]14[.]171[.]222:49473/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12860,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12860,
                "newInLastHour": 8785,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"edge[.]apricotrun[.]cc\"",
                " \"hxxp://teculse[.]click:9210/products\"",
                " \"hxxp://teechop[.]shop:8213/workspaces\"",
                " \"hxxp://arqtsop[.]shop:9932/tags\"",
                " \"restorandvoriste[.]rs\""
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
            "iocCount": 10688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10688,
                "newInLastHour": 0,
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
            "totalIndicators": 54222,
            "activeSources": 8,
            "criticalAlerts": 24500,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13834,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10666,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4492,
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
                    "1[.]177[.]162[.]2",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 12949,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://116[.]75[.]87[.]176:43639/i",
                    "hxxp://59[.]180[.]144[.]106:42402/i",
                    "hxxps://adpayworks[.]b-cdn[.]net/download/1[.]1[.]2/AdPayWorks[.]exe"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3843,
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
                "count": 1404,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"59[.]110[.]153[.]133:8888\"",
                    " \"59[.]110[.]153[.]133:80\"",
                    " \"59[.]110[.]153[.]133:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1213,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"reed-greogzium[.]life\"",
                    " \"zenpetnutrition[.]com\"",
                    " \"www[.]taxinow[.]nl\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 921,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fhmxfpix[.]optiminddigital[.]online\"",
                    " \"hxxps://cold-pyramid[.]com/SGct2K\"",
                    " \"truth-dialogue[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 773,
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
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 42257,
        "lastCalculated": "2026-09-12 03:59 IST"
    }
};
