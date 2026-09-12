// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T09:55:40.267346+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T09:55:39.908972+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 09:55 AM IST",
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
                "hxxps://www[.]metuamssk-logiye[.]godaddysites[.]com/",
                "hxxp://staging[.]dtbf2az168uk3[.]amplifyapp[.]com/",
                "hxxp://www[.]wqqdjddjjddd[.]weebly[.]com/",
                "hxxps://3ib64a1sok-k9t7f7se-evaygbgad7dueuhq[.]z02[.]azurefd[.]net/",
                "hxxps://wordpress-203685-icloudjp[.]cloudclusters[.]net/wp-content/accptw/index[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 880,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 880,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5ad6770bf4ad965f1a280ecc28de35ffa39eb4e174174b968f5dbd56e110f4ab",
                " \"fede8fbf1f1795ddbd9283c5ad2f74869820759fa49b6adb1113df4e19cca3b6",
                " \"d56c1631b2f816bd9cac1c74bd640404556bb00c4567830d951c75fb7f70c122",
                " \"79624d5fbbc9dbca866a3971b801eba6f99450b5340bf434fcd6d182dfe8a479",
                " \"5b00c60a45f81997c20465d87982b3a33cae3c02ecf62240b0f56172782ed5a9"
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
                "1[.]159[.]111[.]86",
                "1[.]165[.]229[.]216",
                "1[.]193[.]37[.]103",
                "1[.]202[.]198[.]86"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5144,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5144,
                "newInLastHour": 5144,
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
            "iocCount": 12413,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12413,
                "newInLastHour": 12413,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]226[.]209[.]82:46014/i",
                "hxxp://193[.]178[.]158[.]107/bin/46d0be2a38b04583_syshost_loader[.]exe",
                "hxxp://105[.]184[.]139[.]80:45613/i",
                "hxxp://42[.]231[.]47[.]159:47811/bin[.]sh",
                "hxxp://105[.]184[.]139[.]80:45613/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13292,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 13292,
                "newInLastHour": 9217,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cdn-rcs-cloud[.]beer\"",
                " \"qicuzihu[.]workers[.]dev\"",
                " \"167[.]172[.]142[.]69:22\"",
                " \"8[.]145[.]61[.]81:8080\"",
                " \"8[.]145[.]61[.]81:80\""
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
            "iocCount": 10670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10670,
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
            "totalIndicators": 54403,
            "activeSources": 8,
            "criticalAlerts": 24521,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13855,
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
                "count": 4500,
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
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 12958,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]101[.]82:48478/i",
                    "hxxp://196[.]189[.]130[.]28:60910/bin[.]sh",
                    "hxxp://196[.]189[.]101[.]82:48478/bin[.]sh"
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
                "name": " \"unknown_loader\"",
                "count": 1789,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"trezenbold[.]com\"",
                    " \"trustmark[.]uk[.]com\"",
                    " \"tuitionservices[.]uk\""
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
                "count": 1402,
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
                "count": 1296,
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
                "name": " \"js.clearfake\"",
                "count": 927,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"restorandvoriste[.]rs\"",
                    " \"www[.]paulinaniewiadomskaphotography[.]pl\"",
                    " \"pvbr[.]is\""
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
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 42127,
        "lastCalculated": "2026-09-12 09:55 IST"
    }
};
