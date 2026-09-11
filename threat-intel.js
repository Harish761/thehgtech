// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T02:40:23.304834+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T02:40:22.956583+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 02:40 AM IST",
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
            "iocCount": 858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 858,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ca3ebe2ce77f73faf246331eff19f8c33966520ff7c3369d83d244dfdbda0a1a",
                " \"a36ee55b824760641e9c06a8b30fc2ed23851bc49da254c61a68fdcf4b192bf0",
                " \"9654e2f8add456b4c77d2435ed30299fd9c0935ae6ce34adc52833926e400e6e",
                " \"9e725f4893d50fccea212a96359489cb36a00e8f397ebbb2e712278b124c5567",
                " \"db3cf6dae0646bbe3715d66efb5efdc0a42c96efbbe4166e043d890a1a74c2db"
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
                "newInLastHour": 60,
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
                "1[.]177[.]162[.]2",
                "1[.]181[.]200[.]22",
                "1[.]183[.]41[.]170",
                "1[.]193[.]63[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5254,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5254,
                "newInLastHour": 5254,
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
            "iocCount": 12949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12949,
                "newInLastHour": 12949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://116[.]75[.]87[.]176:43639/i",
                "hxxp://59[.]180[.]144[.]106:42402/i",
                "hxxps://adpayworks[.]b-cdn[.]net/download/1[.]1[.]2/AdPayWorks[.]exe",
                "hxxps://raw[.]githubusercontent[.]com/HartayKirjonrw/sa4/refs/heads/main/Signature%20Nib[.]exe",
                "hxxp://221[.]14[.]173[.]32:33059/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12700,
                "newInLastHour": 8625,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]61[.]107:8074\"",
                " \"154[.]91[.]61[.]112:8074\"",
                " \"154[.]91[.]61[.]110:8074\"",
                " \"fhmxfpix[.]optiminddigital[.]online\"",
                " \"hxxps://cold-pyramid[.]com/SGct2K\""
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
                "newInLastHour": 26,
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
            "totalIndicators": 54161,
            "activeSources": 8,
            "criticalAlerts": 24518,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13878,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10640,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4468,
                "trend": "stable",
                "percentage": 1
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
                    "1[.]145[.]32[.]156",
                    "1[.]177[.]162[.]2"
                ]
            },
            {
                "name": "malware_download",
                "count": 12937,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]231[.]207[.]203:40714/i",
                    "hxxp://123[.]190[.]27[.]84:51494/i",
                    "hxxp://168[.]119[.]85[.]190/bash[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3839,
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
                "name": "Spamhaus DROP List",
                "count": 1662,
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
                "count": 1443,
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
                "count": 1408,
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
                "count": 1157,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zenpetnutrition[.]com\"",
                    " \"www[.]taxinow[.]nl\"",
                    " \"www[.]tekodaelektro[.]no\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 920,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"nogps5zl[.]www-genesisrevival[.]com\"",
                    " \"8x3dirc5[.]ydns[.]shop\"",
                    " \"eoczi62r[.]wiro88[.]blog\""
                ]
            },
            {
                "name": "Vidar",
                "count": 764,
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 42245,
        "lastCalculated": "2026-09-12 02:40 IST"
    }
};
