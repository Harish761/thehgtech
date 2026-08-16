// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-17T02:03:41.169523+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-17T02:03:40.817478+05:30",
    "lastUpdatedFormatted": "Aug 17, 2026 at 02:03 AM IST",
    "comparisonPeriod": "Aug 16 \u2013 Aug 17, 2026",
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
            "iocCount": 595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 595,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b8f16d61b55a014b33c78efb68c229073cec7076fe02787867f28b73ca062be6",
                " \"97c941e1ac351aa3d00bd161b72ff7be619a78a8d763f8076593fea485d776c5",
                " \"bf51022b610a76ff9894a07f282a780373fdd5d4b78367d080eb4ae36302a28c",
                " \"93e25d37381246b8b5be733a38319cabe0fdab4842f0073639f639b73a58e9ab",
                " \"1bca17b53261c54c5882788c2767e5674bc8951a53314c803668202ff2b9bb56"
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
                "1[.]140[.]210[.]242",
                "1[.]183[.]161[.]214",
                "1[.]183[.]17[.]214",
                "1[.]189[.]248[.]114",
                "1[.]190[.]139[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4964,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4964,
                "newInLastHour": 4964,
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
            "iocCount": 17028,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17028,
                "newInLastHour": 17028,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]239[.]81[.]215:38553/i",
                "hxxp://27[.]194[.]27[.]62:59829/bin[.]sh",
                "hxxp://59[.]97[.]252[.]34:44324/i",
                "hxxp://210[.]208[.]111[.]234:45761/i",
                "hxxp://115[.]58[.]88[.]232:50270/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4964,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4964,
                "newInLastHour": 4647,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"67[.]216[.]197[.]83:5080\"",
                " \"n8e[.]us[.]com\"",
                " \"hxxp://vexdico[.]shop:8539/files\"",
                " \"94[.]250[.]182[.]47:4433\"",
                " \"94[.]26[.]0[.]7:80\""
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
                "newInLastHour": 2,
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
            "totalIndicators": 49948,
            "activeSources": 8,
            "criticalAlerts": 28019,
            "activeCampaigns": 221
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17601,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10418,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3849,
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
                "count": 17017,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]149[.]135[.]190:37738/i",
                    "hxxps://thu-iphone-07[.]cfd/PithnoModule[.]exe",
                    "hxxp://218[.]13[.]149[.]41:37814/bin[.]sh"
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
                "count": 1686,
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
                "count": 1437,
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
                    " \"116[.]204[.]119[.]99:443\"",
                    " \"47[.]237[.]89[.]109:443\"",
                    " \"47[.]236[.]53[.]104:443\""
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
                "name": "Vidar",
                "count": 706,
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
                "name": "QuasarRAT",
                "count": 698,
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
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": "OffLoader",
                "count": 460,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dfde6725130631a83b3d0dc221736bad3db16918",
                    "183d02c077142b8701d1a719cc8cee3f8fb76072",
                    "05b215b1710e56a14f4742b10586af2750da866a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Vidar",
        "totalAttacksThisHour": 42008,
        "lastCalculated": "2026-08-17 02:03 IST"
    }
};
