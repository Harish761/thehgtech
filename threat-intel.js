// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-05T19:58:02.803595+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-05T19:58:02.556916+05:30",
    "lastUpdatedFormatted": "Aug 05, 2026 at 07:58 PM IST",
    "comparisonPeriod": "Aug 04 \u2013 Aug 05, 2026",
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
                "hxxp://site-7lhik3ohd[.]godaddysites[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/471184536693/profile",
                "hxxps://paidopinion[.]xyz/",
                "hxxps://coinvasxtension[.]webflow[.]io/",
                "hxxp://fortcheck[.]club/id/login"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1149,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1149,
                "newInLastHour": 81,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2ae7dc16ca036cb5c2c7ce2cd8099edb07d96b8846188c92eb39a7feba2fec08",
                " \"bc898187f826b982f9219b96e789607421015a070cb93cef2522ab04e022e524",
                " \"c33bf27dc5e7c57f95cc10e6480e54faea225df318ae994117d60a231149347b",
                " \"c72f70ab824403747ffe72f9a465922b29ba8131b49279b02a12f771048d8329",
                " \"d3c060e3dfaa2fdca0d8aa47913e9772c81525148aa6d9f5d443ec4f24ef9877"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1671,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1671,
                "newInLastHour": 54,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]82[.]219",
                "1[.]159[.]103[.]245",
                "1[.]159[.]48[.]69",
                "1[.]191[.]146[.]184"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5063,
                "newInLastHour": 5063,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]192[.]61[.]70",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49",
                "1[.]20[.]228[.]110"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15488,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15488,
                "newInLastHour": 15488,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]113[.]103:50232/i",
                "hxxp://45[.]135[.]193[.]217/bins/psh4",
                "hxxp://210[.]208[.]110[.]172:57475/i",
                "hxxp://61[.]53[.]239[.]58:40970/i",
                "hxxp://182[.]126[.]112[.]44:49876/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4217,
                "newInLastHour": 4132,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"161[.]248[.]14[.]209:5222\"",
                " \"qzhuqva[.]samuelbarbershop[.]com\"",
                " \"117[.]72[.]72[.]254:1261\"",
                " \"123[.]56[.]48[.]58:8999\"",
                " \"46[.]63[.]0[.]187:7443\""
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
            "iocCount": 10261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10261,
                "newInLastHour": 143,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "01cc79c660e1677fc17665e6d8169b5fdad75668",
                "5dcd3232fc9873ebedca38f8ba5992fce6dccb61",
                "3ddf56dd624309d956cccb6c41eb6fcfbb3c6364",
                "ded1fe95801f3c3fd8a1c73360fbaef6697bcf34",
                "30ae51f106a573be769968e15c0a6f56a2878a16"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47799,
            "activeSources": 8,
            "criticalAlerts": 26713,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16563,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10150,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3668,
                "trend": "stable",
                "percentage": -1
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
                "count": 15400,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]48[.]145[.]53:41733/i",
                    "hxxp://182[.]123[.]178[.]25:50097/i",
                    "hxxp://110[.]36[.]25[.]33:47305/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]159[.]48[.]69",
                    "1[.]178[.]120[.]110"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1619,
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
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]204[.]223[.]230:8080\"",
                    " \"102[.]204[.]223[.]230:80\"",
                    " \"43[.]108[.]51[.]124:10001\""
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
                "count": 685,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
                    "964d86f575c50b29d2b7157331d556859dd43e5e"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 484,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d80e73f79ea87aa2b9c2f488d8acf56f19059c32db8aeefe471a8907c9c5dd52",
                    " \"85a53e328463f0bdd53937585a176b1882ed00c4948025c3c795ed942f134a87",
                    " \"baa8fa960244f34828509b9511a82c77eee66b98b1f0e163065199079b0fddb0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40266,
        "lastCalculated": "2026-08-05 19:58 IST"
    }
};
