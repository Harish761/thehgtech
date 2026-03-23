// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-23T14:40:06.996873+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-23T14:40:06.701288+05:30",
    "lastUpdatedFormatted": "Mar 23, 2026 at 02:40 PM IST",
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
            "iocCount": 509,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 509,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"016a248f179820d28be2af94b4965f8c5655bc28a2d64c736771002d1970687b",
                " \"d5d2bfae4ebcdcca6193011145a75292a2d09523c7d5612099d3d88b78292e0a",
                " \"0aaff85b11f5cc5930d012c17075f74dec16e9ad19b9fa729254d5e60961810a",
                " \"eef944c51c6ccb97719aad1b855cbfa545fed8c6d5151b51cdea4d30e18da93f",
                " \"401309e3550e7cb31385ea5c345a45cc075f0970698fdf85495ea8d13a4c58e3"
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
                "1[.]0[.]253[.]217",
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236",
                "1[.]161[.]138[.]75",
                "1[.]177[.]63[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4818,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4818,
                "newInLastHour": 4818,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]164[.]175[.]121",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20863,
                "newInLastHour": 20863,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://msk4point[.]datacenterstream[.]in[.]net/verification[.]google/",
                "hxxps://n4rr-wave[.]gobright[.]in[.]net/verification[.]google/",
                "hxxps://cl1proc[.]signalpathfinder[.]in[.]net/verification[.]google/",
                "hxxps://int1proc[.]virtualgatekeeper[.]in[.]net/verification[.]google/",
                "hxxps://svc4link[.]binaryflowbuffer[.]in[.]net/verification[.]google/"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1036,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1036,
                "newInLastHour": 1036,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"t1mb-drive[.]prowinserv[.]in[.]net\"",
                " \"203[.]159[.]90[.]37:8041\"",
                " \"193[.]233[.]75[.]18:56001\"",
                " \"di5pat-ring[.]prowinserv[.]in[.]net\"",
                " \"kk54[.]joksserver[.]in[.]net\""
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
            "iocCount": 9368,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9368,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7da0a76b514869395da864dff3444a294c5bc73b",
                "dd9055d19cf441e17d7a0f8d4f3cd8a78712993d",
                "30f1bac7bb98fdf0215cdf023bac1112f5d35f99",
                "055a435dbca9b6c9f14de1735be3c2f4b3b84274",
                "855df27eb0c93652f8fc54190698c15bcb86373d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47860,
            "activeSources": 8,
            "criticalAlerts": 30136,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20812,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9324,
                "trend": "up",
                "percentage": 1024
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 281,
                "trend": "stable",
                "percentage": 2
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20340,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]180[.]117:58839/bin[.]sh",
                    "hxxps://svc1proc[.]activefusioncore[.]in[.]net/verification[.]google",
                    "hxxp://125[.]40[.]2[.]67:33196/bin[.]sh"
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
                    "1[.]15[.]118[.]23",
                    "1[.]161[.]138[.]75"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1533,
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
                "count": 448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dev4space[.]nodalbufferpoint[.]in[.]net\"",
                    " \"dev2outer[.]nodalbufferpoint[.]in[.]net\"",
                    " \"dev1proc[.]nodalbufferpoint[.]in[.]net\""
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
                "name": "OffLoader",
                "count": 362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "137adb757afcb4e5980a5e6aa63ac498559309d2",
                    "c270b8cf7595e0001fd536bec354a714c1269136",
                    "31badffbca316a7ab6cbca09cedd56fb94944138"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42110,
        "lastCalculated": "2026-03-23 14:40 IST"
    }
};
