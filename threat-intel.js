// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-16T15:13:35.094696+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-16T15:13:34.686837+05:30",
    "lastUpdatedFormatted": "Apr 16, 2026 at 03:13 PM IST",
    "comparisonPeriod": "Apr 15 \u2013 Apr 16, 2026",
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
                "hxxp://www[.]claimofferinstantshop-2[.]xyz/",
                "hxxp://store[.]communitygamearts[.]co/workshop/AK47-EternalDecay",
                "hxxp://www[.]dpdlocayo[.]cyou/com",
                "hxxps://booking-confirmation6785175[.]com/X/608465342191043/",
                "hxxps://validacionmsnenproceso[.]iceiy[.]com/?i=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 742,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 742,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a2bc726a75790e94e3854cd7f8b1f3a4f03c3d7e9f38569f3d8de02fbcb2c6b",
                " \"cfdf1a5cedaf947aca53d3454df1fc12d76f5d4e0ddbe9d3db1ee673ec1bf802",
                " \"1bfdad6451307a77867f50311e9b209f5378d69972a8efafb29cbfda88bced1f",
                " \"64268aabb05ab23b0e746311547591818ac496ff355ab8f158645a5060a94f2f",
                " \"83533255b2388fd6d3028754449497e3a1daa5b9d8ca562b674036b360769dc8"
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
                "newInLastHour": 6,
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
                "1[.]159[.]245[.]226",
                "1[.]162[.]81[.]96",
                "1[.]172[.]37[.]117",
                "1[.]178[.]175[.]72",
                "1[.]183[.]161[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 690,
                "newInLastHour": 690,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]65[.]136[.]97",
                "1[.]94[.]196[.]254",
                "100[.]31[.]213[.]204",
                "101[.]200[.]148[.]8",
                "101[.]206[.]210[.]140"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25768,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25768,
                "newInLastHour": 25768,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://248bestmoon[.]click/files/fm_20260413_095904_ffmpeg[.]zip",
                "hxxps://248bestmoon[.]click/files/fm_20260413_094108_ffmpeg[.]zip",
                "hxxps://248bestmoon[.]click/files/fm_20260415_074921_CKeyboardH[.]dll",
                "hxxps://248bestmoon[.]click/files/netinfo[.]exe",
                "hxxps://248bestmoon[.]click/files/fm_20260413_104113_ffmpeg[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6982,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6982,
                "newInLastHour": 6322,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"144[.]172[.]65[.]204:4443\"",
                " \"senior-staff2[.]aim-national[.]in[.]net\"",
                " \"small-team1[.]aim-national[.]in[.]net\"",
                " \"brand-mark6[.]guy5mist[.]in[.]net\"",
                " \"quick-cash5[.]guy5mist[.]in[.]net\""
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
            "iocCount": 9599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9599,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1298a4447ff2d5dc3b13b39257a66b52e178f77",
                "17fd07fadd07777f543e7f16694be4ff848d9811",
                "df53283a8245fd412a47d02c17cbb3c6de1109a2",
                "e0127cb029c9d3778d15d3948b41ecdc8b44fb03",
                "88c1ef23b741f6701204f8d79dcc8cede3f28c3f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59723,
            "activeSources": 8,
            "criticalAlerts": 35784,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26269,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9515,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 991,
                "trend": "stable",
                "percentage": -3
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
                "percentage": 83
            },
            {
                "name": "Tech",
                "percentage": 16
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
                "count": 25492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://street-view6[.]kro2vilen[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://123[.]190[.]227[.]65:41653/i",
                    "hxxps://good-luck5[.]kro2vilen[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]245[.]226",
                    "1[.]162[.]81[.]96",
                    "1[.]172[.]37[.]117"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 4736,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ooo[.]websitearaxa[.]com\"",
                    " \"hxxps://ooo[.]websitearaxa[.]com/\"",
                    " \"dl[.]armour-inc-down[.]net\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1584,
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
                "count": 1404,
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
                "count": 665,
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
                "name": " \"win.redline_stealer\"",
                "count": 659,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"0e723233c9ad0a9b0fd7f27622bdf53704a0a2a22b5f86bda8ac2a6a289e2f98\"",
                    " \"636c33acef02ce821e506200d9051350b56ad63c18683cf389e2e9aba7ae912d\"",
                    " \"a00de33c41dfa9ad1a98f7e6957e5d52e0007b8c96e5578ed10e4c10eaadf103\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
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
                "count": 493,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"street-view6[.]kro2vilen[.]in[.]net\"",
                    " \"good-luck5[.]kro2vilen[.]in[.]net\"",
                    " \"sunny-day4[.]kro2vilen[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48203,
        "lastCalculated": "2026-04-16 15:13 IST"
    }
};
