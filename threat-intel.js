// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-18T20:29:14.188399+05:30 IST (2026-10-18 14:59 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-18T20:29:14.176753+05:30",
    "lastUpdatedFormatted": "Oct 18, 2026 at 08:29 PM IST",
    "lastUpdatedUtc": "2026-10-18 14:59 UTC",
    "comparisonPeriod": "Oct 17 \u2013 Oct 18, 2026",
    "stats": {
        "totalIOCs": 74247,
        "byType": {
            "url": 41259,
            "ip": 19394,
            "hash": 906,
            "domain": 0,
            "ssl-cert": 10997,
            "ip-range": 1691
        },
        "byVendor": {
            "OpenPhish": 300,
            "Malware Bazaar": 906,
            "Spamhaus DROP": 1691,
            "CINS Army": 15000,
            "Blocklist.de": 4389,
            "URLhaus": 33512,
            "ThreatFox": 7447,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10997
        },
        "topMalware": [
            {
                "name": "AsyncRAT",
                "count": 1461,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "win.cobalt_strike",
                "count": 1265,
                "types": [
                    "url"
                ]
            },
            {
                "name": "Vidar",
                "count": 860,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 722,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "elf.mirai",
                "count": 703,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.pure_rat",
                "count": 650,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.vidar",
                "count": 596,
                "types": [
                    "url"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 559,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 549,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 513,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "js.iclickfix",
                "count": 437,
                "types": [
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 418,
                "types": [
                    "hash"
                ]
            },
            {
                "name": "Malware",
                "count": 414,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "win.asyncrat",
                "count": 367,
                "types": [
                    "url"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "Malware",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureRAT",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "OffLoader",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "OffLoader",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "ACRStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "ACRStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "20e506ba84f2b1e681674fed4f44d72024f18cb2",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "5758a152f5bc1f96581c6530488f830766c45c96",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "b6e98fa780d26472b70284be1abf84e7cf2bb152",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "Malware",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "6dc0b07b0666b932f43af624460a79c98d5d17bb",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "ConnectWise",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "28c47a169d83c0017b5db95a0ae29973cf21d13b",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "ConnectWise",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "a36fb193d41fdff5259ef4902ef4b33de38f768b",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "c7a0310a47eec71976fbd7a4ac1dbd0aa4b7a7c1",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "PureRAT",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "ff59f65a5b8f0f847ed3c0ac1f140dc28de2f720",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "OffLoader",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            },
            {
                "type": "ssl-cert",
                "indicator": "4fcc8c0172b376ebfc85d644c5f64f7cd60321a5",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "just now",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-18 18:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-18T18:04:29.639301+05:30",
                "campaign": "Vidar",
                "confidence": "High (Feed Verified)",
                "vendor": "SSL Blacklist"
            }
        ],
        "lastUpdated": "2026-10-18T20:29:14.176753+05:30",
        "lastUpdatedFormatted": "Oct 18, 2026 at 08:29 PM IST",
        "lastUpdatedUtc": "2026-10-18 14:59 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]roblox[.]ly/users/1036952856/profile",
                "hxxp://digitley-dhl[.]azurewebsites[.]net/login",
                "hxxps://www[.]roblox[.]com[.]ml/games/9872472334/HLWN-Evade?privateServerLinkCode=384328757637766641742433182819",
                "hxxps://tiktokvip[.]cyou/",
                "hxxp://rss2[.]sayler[.]at/go/z2b4u2/z274y274"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 906,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "ff2b8a9b66704fae8df6f985888327ed26bdcd70a260d728964f674395b1627b",
                "3984f407c863bc293d0b733b31f5366461b237f129371986ecd142050abd190e",
                "d46a3cca1520e40280b7e6657b8ec42b0ceda2d645ca441d775554b5090ba621",
                "a3b5c087ed644af206249b9a16ed6632b9bdb967d7b8fe2a988dd54e0b82b1bd",
                "a3ee98244ebab62c277615704759088bbd23ffdfe872067ed19408f0280fa2c6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
                "newInLastHour": 25,
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
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]58[.]215",
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4389,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]234[.]23[.]83"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33512,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://cdk[.]monther[.]life/DvnX[.]zip",
                "hxxp://64[.]235[.]41[.]83/AI",
                "hxxp://178[.]132[.]198[.]200/bins[.]sh",
                "hxxp://182[.]127[.]127[.]58:40976/bin[.]sh",
                "hxxp://182[.]119[.]34[.]172:33099/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7447,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://xw[.]9win[.]cyou/qk/",
                "80[.]78[.]28[.]56:31337",
                "140[.]143[.]193[.]143:443",
                "hxxps://xw[.]9win[.]cyou/wj/",
                "hxxp://182[.]117[.]28[.]216:45408/Mozi[.]m"
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
            "iocCount": 10997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10997,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38151a6b2438b2b645a27a891e1e15786f11a783",
                "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "b97f1ae860fce04e1aae480e10b884da9826b17b"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "38151a6b2438b2b645a27a891e1e15786f11a783",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Malware",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2234aa66c80b118b69211f6e8f4efbd578a7587",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "b97f1ae860fce04e1aae480e10b884da9826b17b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "97001686e56437dda319c71d5b0deeb8647de6e3",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad71014e839f794407e155508ce8ba98bf9556f7",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "565ad03c4f04a685db081954cc9e5b1b210849e9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "3aa254a14d2bfefa3f3645be8f87a814edcf3109",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "a1fe9a509cdbfa8cc81db2a1f2216a96b32b2e55",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ACRStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "d4c2969ae8a878031ece0d67457d419eab16358f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ACRStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "20e506ba84f2b1e681674fed4f44d72024f18cb2",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "5758a152f5bc1f96581c6530488f830766c45c96",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "b6e98fa780d26472b70284be1abf84e7cf2bb152",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Malware",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "6dc0b07b0666b932f43af624460a79c98d5d17bb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "28c47a169d83c0017b5db95a0ae29973cf21d13b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "a36fb193d41fdff5259ef4902ef4b33de38f768b",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7a0310a47eec71976fbd7a4ac1dbd0aa4b7a7c1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "ff59f65a5b8f0f847ed3c0ac1f140dc28de2f720",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fcc8c0172b376ebfc85d644c5f64f7cd60321a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "19f54af30146108b291727f6f4cfb6339b1c8f86",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "5189412bc415fe1fb2272c297498a47d2d160601",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "a91b47c9e01edba1861a4d17d233fa0925a931f4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb98a0f8b53ff8c03b04b02f39807b205e548ca9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "90c309b563f777d4de2436936d275a0487a22baa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "e58d378500a9237df93a66f055ac6e0dc900d7fa",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Malware",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "86b5a5612e53988e28ed6604e8e9ff5476a46d0e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "d92cdd1624e3d004a180b07c2d2f33406564f839",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Malware",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "8cffe4fa8f624cb4c15790c414e04acde61e3651",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "00095e3cd5dfc929d16036132665d7e3e9ef7cd6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "5e06eaa686adc5ca8fd118752c6667e826bbcad0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "41f8e81a4f9b3e7e70353a84e4bf87d687ddc79e",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "407df66ac87ceb177c560e82df9521c8003b5f0d",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "1389c26fb7ce71a7aa1514e86879daf6b373325a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f154a9a3584398eb6be34b0e2f05c79c63cea6a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "8508e14457ad7de321edddf3688e124d5f1d652c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "d9da2988d90a2479eb45e1fc66ff46b04f2289f2",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ACRStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b276d28106cb7d91dd5f810e61d9523d34c7804",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "1cdb18c33da65a40adad7b51808edf66f3e180e5",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "bf192adc3dcaba7412e15b567de22e3f3150bbf7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "ecae976f3eabcaad996e0a431d47bcead61dfb5e",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "RatonRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "d962e722e22971c6b81f89befbbe949241b8c2ec",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "OffLoader",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "a18ccdbee8a145ba523641dc63189ad51cd04064",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "PureRAT",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "ConnectWise",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f47d296ca2a764238bfd644c7b716cffafa1352",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "Vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b3c4900b63eb2ca8d0d174ef9e989324bc58c0d",
            "description": "Malicious SSL certificate - TELEPUZ C&C",
            "timestamp": "just now",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-18T18:04:29.639301+05:30",
            "campaign": "TELEPUZ",
            "confidence": "High (Feed Verified)",
            "vendor": "SSL Blacklist"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "just now",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-18T18:04:28.353052+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Feed Verified)",
            "vendor": "Feodo Tracker"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "just now",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-18T18:04:28.353052+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Feed Verified)",
            "vendor": "Feodo Tracker"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "just now",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-18T18:04:28.353052+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Feed Verified)",
            "vendor": "Feodo Tracker"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "just now",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-18T18:04:28.353052+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Feed Verified)",
            "vendor": "Feodo Tracker"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "just now",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-18T18:04:28.353052+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Feed Verified)",
            "vendor": "Feodo Tracker"
        },
        {
            "type": "url",
            "indicator": "hxxps://xw[.]9win[.]cyou/qk/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "80[.]78[.]28[.]56:31337",
            "description": " \"win.sliver\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.sliver",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "140[.]143[.]193[.]143:443",
            "description": " \"win.cobalt_strike\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.cobalt_strike",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://xw[.]9win[.]cyou/wj/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxp://182[.]117[.]28[.]216:45408/Mozi[.]m",
            "description": " \"elf.mozi\" -  \"payload_delivery\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mozi",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://xw[.]9win[.]cyou/cm/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "b3579bb6b3b4426673843cc9b4204bcef0312d168e6026ecbb4195345f642013",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://xw[.]9win[.]cyou/k8/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "mapledesk[.]cfd",
            "description": " \"unknown_loader\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "unknown_loader",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://xw[.]9win[.]cyou/tlf/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "compassbase[.]cfd",
            "description": " \"unknown_loader\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "unknown_loader",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "118[.]26[.]111[.]141:80",
            "description": " \"win.cobalt_strike\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.cobalt_strike",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "118[.]26[.]111[.]141:8080",
            "description": " \"win.cobalt_strike\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.cobalt_strike",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "118[.]26[.]111[.]141:443",
            "description": " \"win.cobalt_strike\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.cobalt_strike",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "118[.]26[.]111[.]141:22",
            "description": " \"win.cobalt_strike\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.cobalt_strike",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "wubezizo[.]workers[.]dev",
            "description": " \"php.shin_webshell\" -  \"payload_delivery\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "php.shin_webshell",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://g94[.]9win[.]cyou/o/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "9d2a8bbd[.]bociljp[.]xyz",
            "description": " \"js.clearfake\" -  \"payload_delivery\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "js.clearfake",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "96ae59861488057af96d1ef61f9afa73fb3b46684d941e0d92de0a33e892b879",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "5a97ccdebd3aceeee438032c9e264df20ee41d30d1e4b87f5eb04ed05a234387",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "93d89d70e6882448f1a727922d0eabc413f235ff14dde23f7e1da9d769a987fb",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "c1cb713bf6a8edf4a2e3798bba08e0980dc20f6cbcb0ba96e6e534bca415cff4",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "cace1dc4203d5f8946d4dfd1f0bbcbf897197e25bb1ed15c095f8c679e391691",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "a3ee98244ebab62c277615704759088bbd23ffdfe872067ed19408f0280fa2c6",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "085536903727f568126ea37e509f0972f91bb7e7187a2f4b75a6fdfb34fa278b",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "c2d37cee7bfb31ecb4a3cf7899ef56690a932b36ac39725cde33e2c1c8e1b0e3",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "a97f66a4eaca1e609938abfd3ee586c16f1d478b86e1c0334509a9cbd328ae30",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "59db0e5c4b7c4224bef5b52bbed2b2bcaf615dc2862275984a161f096c608928",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "3984f407c863bc293d0b733b31f5366461b237f129371986ecd142050abd190e",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "ff2b8a9b66704fae8df6f985888327ed26bdcd70a260d728964f674395b1627b",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "d46a3cca1520e40280b7e6657b8ec42b0ceda2d645ca441d775554b5090ba621",
            "description": " \"elf.mirai\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "elf.mirai",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://g94[.]9win[.]cyou/ps/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "216[.]158[.]94[.]75:56001",
            "description": " \"win.pure_rat\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.pure_rat",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "216[.]158[.]94[.]75:56002",
            "description": " \"win.pure_rat\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.pure_rat",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "216[.]158[.]94[.]75:56003",
            "description": " \"win.pure_rat\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.pure_rat",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "paneact[.]xyz",
            "description": " \"unknown_loader\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "unknown_loader",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://g94[.]9win[.]cyou/sx/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "bociljp[.]xyz",
            "description": " \"js.clearfake\" -  \"payload_delivery\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "js.clearfake",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "35c51e94327280ce3f6b3d6814d27f8024fa332309e440ed30adcf70da067152",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "hxxps://g94[.]9win[.]cyou/mr/",
            "description": " \"win.vidar\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.vidar",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "80c3b857f6d288af10a3dd1b1a6ee684b8d4efcd6cc3ae53099934f32ced1682",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "a11d8f216eb7252ff61b869b1f1614437f869def108488d3fd877ed868f194be",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "193[.]233[.]75[.]115:41012",
            "description": " \"unknown\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "General Threat",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "0d8106b1f4c5c44ecb1a77ed5efd010f33603081e3b5f37c05340e231906f18e",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "a79306010cf95e6ec8cfd38af9909b156a317684fe7047e900cfac596e9388b2",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "8a38da72059c0f2dc66faedbb81a905c281c7d5fc1650068bf42a7c82b7e62de",
            "description": " \"osx.amos\" -  \"payload\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "osx.amos",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        },
        {
            "type": "url",
            "indicator": "102[.]220[.]161[.]230:419",
            "description": " \"win.tofsee\" -  \"botnet_cc\"",
            "timestamp": "just now",
            "source": "ThreatFox",
            "sourceUrl": "https://threatfox.abuse.ch/",
            "analysisTime": "2026-10-18 18:04 IST",
            "tags": [
                "live"
            ],
            "addedAt": "2026-10-18T18:04:26.762657+05:30",
            "campaign": "win.tofsee",
            "confidence": "High (Feed Verified)",
            "vendor": "ThreatFox"
        }
    ],
    "dailySummary": {},
    "snapshotMetrics": {}
};
