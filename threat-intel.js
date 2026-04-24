// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-24T15:23:07.107666+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-24T15:23:06.775147+05:30",
    "lastUpdatedFormatted": "Apr 24, 2026 at 03:23 PM IST",
    "comparisonPeriod": "Apr 23 \u2013 Apr 24, 2026",
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
                "hxxp://dakshsingh321[.]github[.]io/netflixclone",
                "hxxps://bonhouse1198[.]com/82035912/",
                "hxxps://alphalocetes[.]com/sql/index[.]html",
                "hxxps://notifiyedexpress[.]com/landing/form/e9beb6d3-7210-40a9-8c9b-e5a6d7f57341",
                "hxxps://ldlg[.]lanxiongjc[.]cn/apusetop/jupindx/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1087,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1087,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"02411506c5ecbd16d2ba301c4d687da46b0ca2dbb526a167a864172edcb66467",
                " \"ff965cbc39961020fda3eda9aeaf15fe142b729dde4ccbe771bd2b07906366dc",
                " \"dccf8726ba96b0d308bd14391ddb77f33428b0a240dde7087374d7707cfb46a8",
                " \"f06e6519db9c9a3cbdf3d512e2fc40cd68081c4bc199f0f8843bd59d0df13de6",
                " \"cb9ffd9412fc0890a8117ea916dcbe221482a6c50c086356fad32b361618c256"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]10[.]133[.]201",
                "1[.]120[.]3[.]95",
                "1[.]169[.]9[.]130",
                "1[.]177[.]162[.]2",
                "1[.]192[.]176[.]34"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 27042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 27042,
                "newInLastHour": 27042,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]143[.]115",
                "1[.]0[.]143[.]71",
                "1[.]0[.]164[.]165",
                "1[.]0[.]215[.]59",
                "1[.]10[.]141[.]248"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25662,
                "newInLastHour": 25662,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://talspireos[.]wi3sorin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://61[.]52[.]157[.]223:57475/i",
                "hxxp://42[.]227[.]237[.]248:45844/i",
                "hxxps://st80et3[.]wi3sorin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://www[.]dropbox[.]com/scl/fi/80pb46ul2nj1avw5hzabr/img_070420[.]png?rlkey=f48psv1go7b2s1nsytfjr9nld&st=z8hkxjy9&dl=1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1040,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1040,
                "newInLastHour": 1023,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"planodeescala[.]com[.]br\"",
                " \"talspireos[.]wi3sorin[.]in[.]net\"",
                " \"st80et3[.]wi3sorin[.]in[.]net\"",
                " \"loadermin[.]wi3sorin[.]in[.]net\"",
                " \"tricoreos5[.]po7vaxel[.]in[.]net\""
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
            "iocCount": 9585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9585,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                "d01e5c2a9987277bfd045839b37c6b9944109e87",
                "282f3ef6e708184f7f5607348879e4442fa44181",
                "6715ad3eb2bf27bc3d853c2ebad3257a6e6cf04f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54245,
            "activeSources": 8,
            "criticalAlerts": 36272,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26680,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9592,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 213,
                "trend": "up",
                "percentage": 24
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
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
                "count": 25566,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]11[.]197[.]89:42176/bin[.]sh",
                    "hxxps://noir-land-3[.]inject-mitroph[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://182[.]113[.]192[.]42:40019/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]120[.]3[.]95",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1572,
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
                "count": 1408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 501,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 481,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"noir-land-3[.]inject-mitroph[.]in[.]net\"",
                    " \"soft-1[.]inject-mitroph[.]in[.]net\"",
                    " \"wald-baum-6w[.]inject-mitroph[.]in[.]net\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 454,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c780c31a557d0d324f66ca66529d7a960d01619dec2ee32cfb789c95b6a84597",
                    " \"41d6198671ef4105cda544e6293e45580ad98668d1433e0f42a2ed91f5fbc0b0",
                    " \"a530187d666f996d308daea3f08eeeb6d67252bf2f491babd3815b882c265246"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 69108,
        "lastCalculated": "2026-04-24 15:23 IST"
    }
};
