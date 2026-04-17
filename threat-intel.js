// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-17T15:12:44.034350+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-17T15:12:43.682609+05:30",
    "lastUpdatedFormatted": "Apr 17, 2026 at 03:12 PM IST",
    "comparisonPeriod": "Apr 16 \u2013 Apr 17, 2026",
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
                "hxxps://anahuacsportal[.]vercel[.]app/",
                "hxxps://shortlink[.]st/FPadWVrW",
                "hxxps://amazoneclonevaibhavd[.]netlify[.]app/",
                "hxxps://search-4784989979-page[.]pages[.]dev/help/contact/526653803514104/",
                "hxxps://mirzasaadb[.]github[.]io/netflixHomePageClone"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 620,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 620,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e51dd9532c2377685acb3a01c5e194e3fec41419d7a646db56c495d87d805753",
                " \"c2048e48933bf50ba92c595f15807c9b9b513ee284b0f05231ea5e52c2cc60e0",
                " \"22bc84261294f6ff39ce079ac046fbdfc92cb5c4f8d2a4e09903221a04ce85eb",
                " \"d643e568c5f34f2fd4f0b7d75ec1ff618fa3d4858da9a3ead7976b7cd56cc9fc",
                " \"454850749d874755a8e1e43e5a128a9fa39ffe49f5ffdbe9f264b5997ccb039c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1589,
                "newInLastHour": 3,
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
                "1[.]1[.]176[.]58",
                "1[.]162[.]81[.]96",
                "1[.]180[.]153[.]254",
                "1[.]182[.]190[.]117",
                "1[.]183[.]161[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 593,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 593,
                "newInLastHour": 593,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]94[.]196[.]254",
                "1[.]95[.]13[.]173",
                "101[.]200[.]148[.]8",
                "101[.]206[.]210[.]140",
                "101[.]245[.]100[.]231"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25872,
                "newInLastHour": 25872,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://read-more2[.]qim8dorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://123[.]12[.]234[.]121:58938/i",
                "hxxp://222[.]127[.]169[.]111:45647/i",
                "hxxp://123[.]12[.]234[.]121:58938/bin[.]sh",
                "hxxps://open-book1[.]qim8dorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1739,
                "newInLastHour": 1735,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"page-number3[.]qim8dorel[.]in[.]net\"",
                " \"read-more2[.]qim8dorel[.]in[.]net\"",
                " \"open-book1[.]qim8dorel[.]in[.]net\"",
                " \"cool-drink6[.]bov1serin[.]in[.]net\"",
                " \"hxxps://yourrenovationplan[.]au/\""
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
            "iocCount": 9606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9606,
                "newInLastHour": 50,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "11344933894b37ecf2ba315ded6d752eff899716",
                "a37f6c18cf9097917437a4ac38798dee443f302e",
                "acf9e95ac84738ad4a8e484bd9fc59c3376ea518",
                "70be78023c4e1f0f4a94b4c65929de136ad55275",
                "c1298a4447ff2d5dc3b13b39257a66b52e178f77"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54586,
            "activeSources": 8,
            "criticalAlerts": 36024,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26490,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9534,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 683,
                "trend": "stable",
                "percentage": -6
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
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
                "count": 25795,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]227[.]39[.]66:34917/bin[.]sh",
                    "hxxps://home-service1[.]tov2liren[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://115[.]59[.]34[.]70:35711/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]162[.]81[.]96",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1586,
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
                "count": 1406,
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
                "count": 672,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03",
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a",
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d"
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
                "name": " \"js.clearfake\"",
                "count": 507,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"home-service1[.]tov2liren[.]in[.]net\"",
                    " \"desk-folder6[.]syl5peran[.]in[.]net\"",
                    " \"glue-stick5[.]syl5peran[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 484,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a37f6c18cf9097917437a4ac38798dee443f302e",
                    "70be78023c4e1f0f4a94b4c65929de136ad55275",
                    "c1298a4447ff2d5dc3b13b39257a66b52e178f77"
                ]
            },
            {
                "name": "OffLoader",
                "count": 397,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a04036db29a3c4ab6e89e5a535baecc8b678fbb9",
                    "1598b0902f425d5a4895a58e5c48ebe96f9df1b5",
                    "0e54a9ea48587f39773ad27d4a8238ee19240408"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 43606,
        "lastCalculated": "2026-04-17 15:12 IST"
    }
};
