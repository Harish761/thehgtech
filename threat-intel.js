// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-17T02:30:21.664259+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-17T02:30:21.297319+05:30",
    "lastUpdatedFormatted": "Apr 17, 2026 at 02:30 AM IST",
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
            "iocCount": 693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 693,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"92d186c887ecc2cb2d51d22aa09f9bdf16e1138d4b2e86c74505fcb2f5b2bf94",
                " \"168cecf63cb4031c99111fad3ffde1595c394515fd3d80adf06f40f5edfacfa0",
                " \"e85e7e0d644266f59ff3cf85e301ce6e0b4f3c2c42aa5f57df999891cd768b3e",
                " \"de264a441a42229fac90055b2ac7b08057a0e90adb5889938bf81e5aa1b352b1",
                " \"de45533bdf55b6f93bd38c6e09a5817e815c10839b9d05effa78ef816d7de0b8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1587,
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
                "1[.]1[.]241[.]197",
                "1[.]14[.]3[.]240",
                "1[.]159[.]245[.]226",
                "1[.]162[.]81[.]96",
                "1[.]183[.]161[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 688,
                "newInLastHour": 688,
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
            "iocCount": 26192,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26192,
                "newInLastHour": 26192,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://fabricpayload[.]wex1miran[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://qt774[.]wex1miran[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://220[.]161[.]100[.]140:56557/bin[.]sh",
                "hxxps://tdjgv[.]wex1miran[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://94[.]156[.]152[.]67:83/manji[.]aarch64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1841,
                "newInLastHour": 1836,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fabricpayload[.]wex1miran[.]in[.]net\"",
                " \"qt774[.]wex1miran[.]in[.]net\"",
                " \"tdjgv[.]wex1miran[.]in[.]net\"",
                " \"nbfkdj[.]wex1miran[.]in[.]net\"",
                " \"winterwind[.]pyn6toral[.]in[.]net\""
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
                "newInLastHour": 0,
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
            "totalIndicators": 55322,
            "activeSources": 8,
            "criticalAlerts": 36438,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26854,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9584,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 879,
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
                "count": 26161,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://92[.]112[.]127[.]184/x64",
                    "hxxp://92[.]112[.]127[.]184/arm7",
                    "hxxps://pastureurban[.]kro4liven[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]51[.]236",
                    "1[.]162[.]81[.]96"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1589,
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
                "count": 675,
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
                "count": 499,
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
                "name": " \"js.clearfake\"",
                "count": 497,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xa20yx[.]kro4liven[.]in[.]net\"",
                    " \"pastureurban[.]kro4liven[.]in[.]net\"",
                    " \"trucarr[.]kro4liven[.]in[.]net\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 457,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://klavdianos[.]webmaze[.]gr/\"",
                    " \"hxxps://marketlabschool[.]com/\"",
                    " \"hxxps://norwalkmover[.]com/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 44024,
        "lastCalculated": "2026-04-17 02:30 IST"
    }
};
