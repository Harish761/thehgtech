// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-23T08:49:54.451519+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-23T08:49:54.155855+05:30",
    "lastUpdatedFormatted": "Mar 23, 2026 at 08:49 AM IST",
    "comparisonPeriod": "Mar 22 \u2013 Mar 23, 2026",
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
                "hxxps://starmobily[.]com/m/index[.]html",
                "hxxp://flirt-contacts[.]com/views/fb[.]php?lang=ca&set=s2&domain=track[.]globaltracklabs[.]com&cep=0eTkGECobqKJ40jCmK-8nKDG2qKjMv4_bRuFgbi1gA37fkDh8PWyVcdoKar6655SpVoXykQHldH8Irlndd7cpieAgBDZ1vj4XdY4P_hON3TvTEfXW23nS2Vi2-nAVOadQhJrOjR-GQjwQQ3OheD2aAHs-t0t1y9tr5TiQot-qCvtvAgZPS_5oUxxX88AC7KezUJkJqkG0Y1aBhkqm18RZbnVsi805cKzHqrFWRDZ1J0Xoa-RV3fD0fYI9cKPMv4x07MDPb2hj99WECQyee2GezFKYtx-WpKGjUO4QEzFXNYuhXHgOW9P5qfNGBPxXF0bH7jC5IicniT_GSQNw2NVKHOQDFlxoCOb7mf2jdhZCtXaCxZWIFz7yQszn9f-b5VfELd6W3_JJxWKxLPyTeq9n3mtB9YJRgN6mpt9DZayG81nzvrTEuEUnShz7twN1mIVDqOQBTUBxIJje-8U9Mlb5Y0DBrBmG5qq0ff0ue9yEdgsKgjk8AVxyrssBCJ41YGGPofXBrjOx0oPicT8VDZfCTgU1Z0uz_lcb3ohx80FKEvHtpMlQrSkqXpAf8R48CO28hNQ5HPO4CaBMRDARH3Hzw5uzHrZ0SubLBsCs2335dMfIHcQVOnDlYzn8uaXf_UQrts2rz4MMtudyC5bvNumkyZx-3DSYw3gVyeIINGcpDNfZpBPTP2kmqf1VoeAAxOzT8cKMWTOsgPg7qZ4zz4RdNgk6slAVfwmH6PR7nxadaFuEdsak4mRM8poGnM4DHj9T8ozJJ1eLeTaBuilFxs0lhkqn4DCuso1ZGoTsrY-hwJ12il8g4GwUSKIVNNIFa5_&lptoken=1706715e616a87d38997&ACLID=CP304swGENTQmAEYy_OZ4wMg1ZSouwgo0L2k4AMw1NCYAToCQ0FCAk9OSgdUb3JvbnRvUgExYhAjERjT3vlGc7lQmeJbtAREagNPUkRyIjUxYWVhMTg4MDJjMjQwZTI5MGM4NGM4Y2UxYTY0OGVjLTM=&AdID=2271873621&BanID=1032870271&BanName=Debbie_CA&CampaignID=1013348811&CampaignName=CA_web_native_RON&Location=CA&SiteName=Redtube&SpotID=2500692&SpotName=Redtube+PC+-+Native+Categories",
                "hxxps://codingworld00007[.]github[.]io/Netflix-clone/",
                "hxxp://cyberfish[.]io/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://synetiq[.]ciamlogin[.]com/jsdisabled"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 431,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 431,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3363d6303e76b785f58f2a2f3366af0a0094f742aed46448a3f3a97b300c404e",
                " \"a64e8c4a7e2ca3bdf071fdb645bfd239955a7b9a973d557db2153405f21ede2f",
                " \"92168406b8de6f8c967b071a9eec741aacc35be3003c9c8a15c3bc4f78570a38",
                " \"c45844361ffa080698839f7d475e627f6c18abe462feb590b10372da3a4cc9d5",
                " \"8b30072fc73583017c9f3cd908e0f82b9fb877650cff1599a70adb6d2f3eb852"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
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
                "1[.]0[.]253[.]217",
                "1[.]15[.]118[.]23",
                "1[.]161[.]138[.]75",
                "1[.]177[.]63[.]24",
                "1[.]189[.]229[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4667,
                "newInLastHour": 4667,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]164[.]175[.]121",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20209,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20209,
                "newInLastHour": 20209,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ext4sync[.]topologygatehub[.]in[.]net/verification[.]google",
                "hxxp://175[.]165[.]81[.]253:48766/bin[.]sh",
                "hxxp://42[.]6[.]188[.]169:59708/bin[.]sh",
                "hxxps://ext3gate[.]topologygatehub[.]in[.]net/verification[.]google",
                "hxxp://27[.]37[.]126[.]230:47933/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 890,
                "newInLastHour": 888,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ext3gate[.]topologygatehub[.]in[.]net\"",
                " \"91[.]238[.]123[.]18:7644\"",
                " \"jbbjbjkb-61631[.]portmap[.]host\"",
                " \"91[.]150[.]203[.]65:4782\"",
                " \"Dementiatic-33091[.]portmap[.]host\""
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
            "iocCount": 824,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 824,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8bb07018f233155ce6f17c64dce253ec5734981",
                "daa4e094b47b8c884475fc642924f7891d537687",
                "9b5d6e71e30e21da223ae28fe9015475a5300982",
                "137adb757afcb4e5980a5e6aa63ac498559309d2",
                "c23d6863f7ad286ca9f63354456c552d0b37d6a6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48641,
            "activeSources": 8,
            "criticalAlerts": 30629,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9326,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 286,
                "trend": "stable",
                "percentage": 5
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
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
                "count": 20629,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ext1proc[.]acousticdatabuffer[.]in[.]net/verification[.]google",
                    "hxxp://219[.]156[.]97[.]142:48691/bin[.]sh",
                    "hxxp://182[.]123[.]225[.]10:44274/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]253[.]217",
                    "1[.]10[.]223[.]175",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1535,
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
                "count": 1391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 645,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c23d6863f7ad286ca9f63354456c552d0b37d6a6",
                    "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                    "634e580a85c375140b9a7f5972559dfd4f02033d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 545,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c",
                    "fdd41b75b65c0dfb3a3873ddca6d77723a5e92b6",
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 476,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dev4work[.]chromaprocessing[.]in[.]net\"",
                    " \"dev3local[.]chromaprocessing[.]in[.]net\"",
                    " \"dev2power[.]chromaprocessing[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7074621858c3ebbee2f40b6fbe04e64e494ca5fc",
                    "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                    "e57c93f657e5054142f985327fdff4eb50b349f0"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]151[.]182[.]23:8090\"",
                    " \"dns-providersa2[.]com\"",
                    " \"62[.]84[.]102[.]85:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41098,
        "lastCalculated": "2026-03-23 08:49 IST"
    }
};
