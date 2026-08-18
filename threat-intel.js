// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-18T10:15:53.807252+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-18T10:15:53.474424+05:30",
    "lastUpdatedFormatted": "Aug 18, 2026 at 10:15 AM IST",
    "comparisonPeriod": "Aug 17 \u2013 Aug 18, 2026",
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
                "hxxp://gwcu[.]us[.]org/",
                "hxxps://primevideo-customerhelp[.]165-154-255-202[.]cpanel[.]site/desktop/?auth_max_open=0&ref=h9f4cZxvSGsROZjKVHM3tSCdXrsHGGnTYKEs0T0rzKx4b05j78TBQhezNWVToqN4QPTat26BE1I0e7dRfjiRWn2ecysPBBoCiqXR",
                "hxxps://marneta-gld-lormavi-p1t3fq85[.]pages[.]dev/",
                "hxxp://www[.]moasd011[.]blogspot[.]com/",
                "hxxps://rss2[.]sayler[.]at/go/13c413/y274x274"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 814,
                "newInLastHour": 116,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2632841725d379368ec3f168448519812e2ef8b573e9ced05d51d15787bb0e55",
                " \"8657752cc986d28f3c841df5c9739268539d05a82a2fec7ff41dd13b39392f89",
                " \"e08b66a97248aa0c14e5c9acf013ae26bda5ea3f4b7e978db11694530251a92a",
                " \"29089597dd4c427c6c77b85c3091f92af1e5ba4e70a0251ba08e39cb1cd66923",
                " \"187c28cd5b90edf38f4d602e87970f5ba1251983b2995d0f01a5b73feabb975a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]181[.]200[.]22",
                "1[.]183[.]161[.]214",
                "1[.]192[.]129[.]106",
                "1[.]192[.]177[.]51"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4780,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4780,
                "newInLastHour": 4780,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16566,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16566,
                "newInLastHour": 16566,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]117[.]179[.]242:55011/bin[.]sh",
                "hxxp://182[.]126[.]119[.]188:36580/i",
                "hxxp://42[.]237[.]34[.]160:35437/i",
                "hxxp://123[.]11[.]72[.]60:34472/i",
                "hxxp://162[.]255[.]251[.]91:37737/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4887,
                "newInLastHour": 4749,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://kupzovo[.]shop:7567/transactions\"",
                " \"hxxp://mrlketo[.]shop:8932/posts\"",
                " \"110[.]42[.]255[.]63:3000\"",
                " \"110[.]42[.]255[.]63:9000\"",
                " \"109[.]176[.]19[.]75:8081\""
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
            "iocCount": 10446,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10446,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "abe57abc8722c69494113060260ba340cd897744",
                "89bbec947a91917d4676037abb417ceb72770851",
                "b26d3f583556acab11cbfa864f596c143b15f32d",
                "fc5d9dddb01c263a67e7c485e04277afa82fbabf",
                "a6268e092f3de555c67dac2f9e52eae979b3d8e3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49611,
            "activeSources": 8,
            "criticalAlerts": 27724,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17298,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10426,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3853,
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
                "count": 16534,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]150[.]250[.]245:59676/i",
                    "hxxps://thu-iphone-07[.]cfd/TispciphraLoader[.]exe",
                    "hxxp://182[.]117[.]68[.]136:45066/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29",
                    "1[.]183[.]17[.]214"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1310,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]93[.]221[.]193:22\"",
                    " \"172[.]93[.]221[.]193:443\"",
                    " \"172[.]93[.]221[.]193:8080\""
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
                "count": 713,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "89bbec947a91917d4676037abb417ceb72770851",
                    "b26d3f583556acab11cbfa864f596c143b15f32d",
                    "fc5d9dddb01c263a67e7c485e04277afa82fbabf"
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
                "name": " \"js.clearfake\"",
                "count": 594,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sante-verte[.]ch\"",
                    " \"swiss-genix[.]com\"",
                    " \"signypark[.]ch\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 41516,
        "lastCalculated": "2026-08-18 10:15 IST"
    }
};
