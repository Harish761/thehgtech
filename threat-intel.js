// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-16T09:11:24.963142+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-16T09:11:24.587983+05:30",
    "lastUpdatedFormatted": "Apr 16, 2026 at 09:11 AM IST",
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
            "iocCount": 778,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 778,
                "newInLastHour": 91,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3b45af43b673ee124c89887e3aad20e888a5e645d7cfc7279f24278f4352a5c1",
                " \"759e8adf1b3d3ee3850cba6429e37b42943a615ce9d22e68d6f5494615cf5d0d",
                " \"f6e9316f52f91bb189a191440a36b186108c99e9fd870685436516080c7d2413",
                " \"c3900a803dc86d1a56154be75e2d00b686a531cc123603311c185a2b297890b4",
                " \"b87b2c09523ee7c17e8e6fbf53fc69b95b69cee9a8081b969e6eeadfb107c4ad"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1590,
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
                "1[.]123[.]131[.]149",
                "1[.]123[.]231[.]55",
                "1[.]15[.]51[.]236",
                "1[.]159[.]245[.]226",
                "1[.]162[.]81[.]96"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 720,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 720,
                "newInLastHour": 720,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]65[.]136[.]97",
                "100[.]31[.]213[.]204",
                "101[.]132[.]144[.]220",
                "101[.]200[.]148[.]8",
                "101[.]206[.]210[.]140"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25452,
                "newInLastHour": 25452,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://empty-cart3[.]pyn9sorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://219[.]157[.]185[.]79:44068/i",
                "hxxps://summer-sale2[.]pyn9sorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://fresh-food1[.]pyn9sorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://42[.]232[.]224[.]113:39360/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7061,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7061,
                "newInLastHour": 6398,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"empty-cart3[.]pyn9sorel[.]in[.]net\"",
                " \"summer-sale2[.]pyn9sorel[.]in[.]net\"",
                " \"fresh-food1[.]pyn9sorel[.]in[.]net\"",
                " \"active-job6[.]wex4tiral[.]in[.]net\"",
                " \"short-plan5[.]wex4tiral[.]in[.]net\""
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
            "iocCount": 9598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9598,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "88c1ef23b741f6701204f8d79dcc8cede3f28c3f",
                "c41b9af97db6c261ebd747f97b334a780bb2667d",
                "6b9710d5bb761d4f36d1f99ee108052dee0a6b86",
                "a04036db29a3c4ab6e89e5a535baecc8b678fbb9",
                "4d303a7858b8d0411d6f171866329cdcb69e81d3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 60160,
            "activeSources": 8,
            "criticalAlerts": 36188,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26612,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9576,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1042,
                "trend": "stable",
                "percentage": 0
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
                "count": 25861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://driftvoic[.]parchm-susyuka[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxps://m0ti9-route[.]parchm-susyuka[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://112[.]248[.]0[.]232:58816/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]255[.]186",
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 4715,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bgo[.]sequareeus[.]online\"",
                    " \"hxxps://bgo[.]sequareeus[.]online/\"",
                    " \"bgo[.]biolinks[.]com[.]br\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1590,
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
                "count": 674,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a",
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e"
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
                "count": 554,
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
                "count": 496,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55cbbc80d889fa59b5b473a4215f05f7273b76c4",
                    "40c8ac808a2cf7072bded365f6ef366c95188a35",
                    "8ef1132c5f69f71c7a9cd95eae9da41763238767"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 47966,
        "lastCalculated": "2026-04-16 09:11 IST"
    }
};
