// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-16T23:09:01.739298+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-16T23:09:01.357734+05:30",
    "lastUpdatedFormatted": "Apr 16, 2026 at 11:09 PM IST",
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
                "hxxp://emmanuelbarrault[.]com/wordpress/wp-content/plugins/hello-dolly/bb/index[.]html",
                "hxxp://www[.]next13-airbnb-clone-psi[.]vercel[.]app/",
                "hxxp://www[.]whatsapp-link-generator-weld[.]vercel[.]app/",
                "hxxps://auth[.]verifiedbadgebluepage[.]sbs/requestbadgeconfirm-100001144567",
                "hxxp://ipfs[.]io/ipfs/bafkreidomrwdob7epmuli4zgpe6qbpv43ey7ucfvdkjrmmtkgebcd2pv3i"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 729,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 729,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a770c6402cc0921111019138fe74c06703bf2ecc31d37dc95a1d91670602c0ec",
                " \"393a78e91d01a81784eecd79f1cd6f880194ed74bc29035c1b8b732deb7b7da1",
                " \"fbceaf08b0037216719962007762c3688a41fd05aed4706ad0381f3ff2048260",
                " \"bc8297cf7a88c6b679df9c69cbb2aaa2302e19b3622e0cde040a085025760699",
                " \"fbca20bdbcbd5dddff170ceb503e25f7175beea8943ed95d157efc64837f9d92"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1586,
                "newInLastHour": 9,
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
                "1[.]183[.]161[.]87",
                "1[.]183[.]17[.]214"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 701,
                "newInLastHour": 701,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]94[.]196[.]254",
                "1[.]95[.]13[.]173",
                "100[.]31[.]213[.]204",
                "101[.]200[.]148[.]8",
                "101[.]206[.]210[.]140"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26120,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26120,
                "newInLastHour": 26120,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://fix7-cast[.]zex3piral[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://wrwr[.]zex3piral[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://42[.]86[.]55[.]13:38168/bin[.]sh",
                "hxxp://27[.]216[.]250[.]235:52036/bin[.]sh",
                "hxxps://targetpasture[.]zex3piral[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1946,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1946,
                "newInLastHour": 1945,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fix7-cast[.]zex3piral[.]in[.]net\"",
                " \"wrwr[.]zex3piral[.]in[.]net\"",
                " \"targetpasture[.]zex3piral[.]in[.]net\"",
                " \"keltide4al[.]zex3piral[.]in[.]net\"",
                " \"hxxps://esp[.]nutrionline[.]club/\""
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
            "iocCount": 9564,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9564,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "acf9e95ac84738ad4a8e484bd9fc59c3376ea518",
                "70be78023c4e1f0f4a94b4c65929de136ad55275",
                "c1298a4447ff2d5dc3b13b39257a66b52e178f77",
                "17fd07fadd07777f543e7f16694be4ff848d9811",
                "df53283a8245fd412a47d02c17cbb3c6de1109a2"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55856,
            "activeSources": 8,
            "criticalAlerts": 36335,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26781,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9554,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 918,
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
                "count": 26040,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://st0r3-scope[.]wei8htunconq[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://2[.]27[.]12[.]6/Okami[.]i586",
                    "hxxp://2[.]27[.]12[.]6/Okami[.]sparc"
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
                "name": "Spamhaus DROP List",
                "count": 1580,
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
                "count": 1407,
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
                "count": 673,
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
                "name": " \"js.clearfake\"",
                "count": 495,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"l0qq[.]wei8htunconq[.]in[.]net\"",
                    " \"ucelrko[.]wei8htunconq[.]in[.]net\"",
                    " \"d4wn-hinge[.]wei8htunconq[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 491,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "70be78023c4e1f0f4a94b4c65929de136ad55275",
                    "c1298a4447ff2d5dc3b13b39257a66b52e178f77",
                    "55cbbc80d889fa59b5b473a4215f05f7273b76c4"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44142,
        "lastCalculated": "2026-04-16 23:09 IST"
    }
};
