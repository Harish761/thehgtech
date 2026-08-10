// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-10T19:06:21.841547+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-10T19:06:21.513739+05:30",
    "lastUpdatedFormatted": "Aug 10, 2026 at 07:06 PM IST",
    "comparisonPeriod": "Aug 09 \u2013 Aug 10, 2026",
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
                "hxxp://x39p[.]top/",
                "hxxp://www[.]netflix-clone-opal-iota[.]vercel[.]app/",
                "hxxps://mansithakur204[.]github[.]io/spotify-inspired-music-player",
                "hxxp://www[.]site-jn6w55wca[.]godaddysites[.]com/",
                "hxxp://www[.]instagramfollowersfake[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 882,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 882,
                "newInLastHour": 83,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e1108d6bcefd18c22279fcf97218190d3906fe191fce64047463a4ae61dd0a73",
                " \"cefd48d22cae93ae7116f8f731fdc245b19191e56944672cd04918374b5eb8fc",
                " \"85269163ce84b80ed9408c3538054b42e6aa035b7c7b1c496cdabb9acf87a7f1",
                " \"adedb76b5b1859f620895bf12670ded2ced8ea0756757f144c59612172c2c1ca",
                " \"73a914cd8e191f234bece7f1e7ad6e82a00388fa8828d94e1a53c8b60e7591d2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 1,
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
                "1[.]178[.]120[.]192",
                "1[.]178[.]124[.]228",
                "1[.]183[.]161[.]31",
                "1[.]188[.]82[.]172",
                "1[.]192[.]179[.]82"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4907,
                "newInLastHour": 4907,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]106[.]163",
                "1[.]14[.]77[.]186",
                "1[.]169[.]210[.]90",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16263,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16263,
                "newInLastHour": 16263,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]22[.]249:50192/i",
                "hxxp://39[.]79[.]249[.]142:34161/bin[.]sh",
                "hxxp://42[.]231[.]88[.]100:39090/bin[.]sh",
                "hxxp://42[.]231[.]88[.]100:39090/i",
                "hxxp://privrawmirai[.]privnetwork[.]tech/LjEZs/arm"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4204,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4204,
                "newInLastHour": 3979,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"go78tteu[.]eng-nitrilean[.]com\"",
                " \"nyerki[.]en-us-slimsplits[.]com\"",
                " \"en-us-slimsplits[.]com\"",
                " \"0rwgfz6h[.]finkfamilyautomotive[.]com\"",
                " \"weqtrjme[.]eng-usa-digestistart[.]com\""
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
            "iocCount": 10335,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10335,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b9e2100c0408138edfedb92704bfc57ef9fb59f0",
                "32a8651489a0a5fb3fb0679514bed1e86c0c576c",
                "8f0bfca0ab1d555a035d5b498c9e26acdab3d7aa",
                "10444531944b9b521661ef3bd8d9848d70902bbd",
                "930851db267db9c407bc5adaa9d49f5c994abece"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48462,
            "activeSources": 8,
            "criticalAlerts": 27313,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16966,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10347,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3545,
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
                "name": "malware_download",
                "count": 16072,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]43[.]103[.]43:39953/i",
                    "hxxp://5[.]182[.]210[.]174/dc7ecc",
                    "hxxp://5[.]182[.]210[.]174/c55677"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]114[.]217",
                    "1[.]177[.]63[.]20"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1284,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]45[.]239[.]141:5555\"",
                    " \"49[.]235[.]110[.]173:443\"",
                    " \"117[.]24[.]4[.]112:5555\""
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
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "Vidar",
                "count": 672,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3e3c44169f96771a93af70cef73772afc6530f39",
                    "5b0334a2bc768aa1fef1eb0d10bf52edb071bf1c",
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55828dc9278fe7cc50514d9e95e64422804a0b84",
                    "11a907f87c27b67e87f201281797b95f53508752",
                    "aaaa57850472f7c23d75d9470b1f98655d5c3655"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40539,
        "lastCalculated": "2026-08-10 19:06 IST"
    }
};
