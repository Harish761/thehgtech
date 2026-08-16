// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-16T22:06:25.755699+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-16T22:06:25.414218+05:30",
    "lastUpdatedFormatted": "Aug 16, 2026 at 10:06 PM IST",
    "comparisonPeriod": "Aug 15 \u2013 Aug 16, 2026",
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
                "hxxp://fidelity-investment[.]vercel[.]app/",
                "hxxps://www[.]roblox[.]com[.]mu/communities/5387917544/Royal-Colony-Hangout",
                "hxxps://rbcode[.]net/v/26fe1567f2c5588bb2484acc40040987",
                "hxxps://open[.]apknewdownload[.]info/41-1511-280526/?u=12C1515&e=info%40art-of-technology[.]ch&s3=&s4=&s5=&s6=&s7=&s8=",
                "hxxps://link[.]curiosityproject[.]info/ga/click/2-110620629-1492-9938-19429-10679-e7545cdb29-6b7dcff176/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 447,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d83c4639077653ef4d78d757087b5d6968644b11388009195f918c32ca9b87ee",
                " \"eadfacfabe8f284811d6fa90fb7e293666e3bbf3b15ebdec3dfafcae907f89fc",
                " \"09df0b71b4cd7144433db1b4a689f01b1d85abadcd29962b75d740c5846002c5",
                " \"d35c9c1c33255b080c78801a74ac5ceee00644ba3a8950739a3607291611d174",
                " \"44da9c84a1c69a63a661485db45ac537532e9426772c4c8415bfe50dfbae0f10"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
                "newInLastHour": 32,
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
                "1[.]119[.]158[.]77",
                "1[.]183[.]161[.]214",
                "1[.]183[.]17[.]214",
                "1[.]183[.]194[.]182",
                "1[.]183[.]194[.]190"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4947,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4947,
                "newInLastHour": 4947,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]20[.]150[.]200",
                "1[.]203[.]174[.]102",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16935,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16935,
                "newInLastHour": 16935,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]28[.]194[.]92:40193/i",
                "hxxp://182[.]123[.]211[.]251:59971/i",
                "hxxp://125[.]44[.]196[.]40:38436/i",
                "hxxp://182[.]117[.]10[.]67:46177/i",
                "hxxp://182[.]117[.]10[.]67:46177/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5839,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5839,
                "newInLastHour": 5621,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"103[.]240[.]196[.]115:7800\"",
                " \"103[.]240[.]196[.]115:7811\"",
                " \"hxxp://tokjoza[.]shop:5200/exports\"",
                " \"hxxp://glimqra[.]click:6534/messages\"",
                " \"deben[.]ch\""
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
            "iocCount": 10442,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10442,
                "newInLastHour": 108,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "057b2084f877c8737e60de6c07ad829ea411b9c6",
                "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50276,
            "activeSources": 8,
            "criticalAlerts": 27755,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17443,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10312,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3751,
                "trend": "stable",
                "percentage": -2
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
                "count": 16898,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]124[.]9[.]99:47755/bin[.]sh",
                    "hxxp://115[.]48[.]146[.]252:57987/i",
                    "hxxp://42[.]230[.]30[.]16:36416/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1654,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1282,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]242[.]248[.]156:30001\"",
                    " \"108[.]165[.]147[.]244:8081\"",
                    " \"101[.]42[.]255[.]92:8001\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1181,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://94[.]26[.]90[.]126/OTGQqXnM9XS4dsIiC\"",
                    " \"hxxps://pub-18653d64d62d4ec886510b90fdfce453[.]r2[.]dev/GCt12d[.]zip\"",
                    " \"hxxp://pub-18653d64d62d4ec886510b90fdfce453[.]r2[.]dev/GCt12d[.]zip\""
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "Vidar",
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "057b2084f877c8737e60de6c07ad829ea411b9c6",
                    "f3ba11a6cb8be921ee0fbd326de9a66220bcc82f",
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vshell\"",
        "totalAttacksThisHour": 43003,
        "lastCalculated": "2026-08-16 22:06 IST"
    }
};
