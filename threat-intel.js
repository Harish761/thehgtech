// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-18T14:18:56.251869+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-18T14:18:55.896023+05:30",
    "lastUpdatedFormatted": "Aug 18, 2026 at 02:18 PM IST",
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
            "iocCount": 941,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 941,
                "newInLastHour": 168,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8b605293f44876a772582d5809bc11218e5eb6ed03dca507f75ee24afd83ac08",
                " \"05e1003e63865a41fd2955642be8e217ee7b4e8500d673d87fd15ad93b6ec296",
                " \"4504ad48da7c0b4fea30abb90120f3d7b57a71a43f8bc2dd5dc5860c7329506d",
                " \"cf97dedb4911bdbbf9b5a541ec2b823925f7ed75a32da57e9b7bd46c33f47564",
                " \"4aa552e9499b102046e7d2e19ade48a8e29e57482d48e1c2ea125cbf83fd70c9"
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]210[.]242",
                "1[.]165[.]27[.]71",
                "1[.]183[.]161[.]214",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4776,
                "newInLastHour": 4776,
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
            "iocCount": 16646,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16646,
                "newInLastHour": 16646,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]155[.]104[.]55:50766/bin[.]sh",
                "hxxp://118[.]34[.]109[.]121:38226/bin[.]sh",
                "hxxp://115[.]55[.]219[.]43:42748/i",
                "hxxp://219[.]155[.]195[.]226:55894/bin[.]sh",
                "hxxp://37[.]54[.]31[.]40:58523/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6716,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6716,
                "newInLastHour": 6579,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"alpeninitiative[.]ch\"",
                " \"garageduvignoble[.]fr\"",
                " \"srp-immobilienservice[.]ch\"",
                " \"gigifilare[.]it\"",
                " \"hxxp://kupzovo[.]shop:7567/collections\""
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
            "iocCount": 10449,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10449,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fa62c7ce7b7ec943d8853832560bc5a386aaf17e",
                "abe57abc8722c69494113060260ba340cd897744",
                "89bbec947a91917d4676037abb417ceb72770851",
                "b26d3f583556acab11cbfa864f596c143b15f32d",
                "fc5d9dddb01c263a67e7c485e04277afa82fbabf"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49710,
            "activeSources": 8,
            "criticalAlerts": 27831,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17407,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10424,
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
                "count": 16566,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]117[.]179[.]242:55011/bin[.]sh",
                    "hxxp://182[.]126[.]119[.]188:36580/i",
                    "hxxp://42[.]237[.]34[.]160:35437/i"
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
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]161[.]214"
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
                "count": 1312,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"110[.]42[.]255[.]63:3000\"",
                    " \"110[.]42[.]255[.]63:9000\"",
                    " \"172[.]93[.]221[.]193:22\""
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
                "count": 593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5efvflg4[.]en-en-usa-sightfresh[.]com\"",
                    " \"associacaoconfianca[.]org[.]br\"",
                    " \"solothurn-stadtfuehrungen[.]ch\""
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
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 43477,
        "lastCalculated": "2026-08-18 14:18 IST"
    }
};
