// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-12T12:13:32.314816+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-12T12:13:31.965191+05:30",
    "lastUpdatedFormatted": "Jul 12, 2026 at 12:13 PM IST",
    "comparisonPeriod": "Jul 11 \u2013 Jul 12, 2026",
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
                "hxxps://www[.]facebookphotospage[.]blogspot[.]com/",
                "hxxp://sp32ct-molzar-biz-kelnik-vutra[.]pages[.]dev/",
                "hxxp://sp32ct-qurnik-biz-lomvak-sutra[.]pages[.]dev/",
                "hxxps://www[.]roblox[.]com[.]ml/users/395561034796/profile",
                "hxxps://www[.]apps9-facebook[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 487,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 487,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ec788ee50c7c7abcc5f3b17d29a8a2eb20bbbfd15068730c428f17cf635c6076",
                " \"b78af846465da9ee352461836d584e8b4913293b691a429e0a90005135eea8e5",
                " \"46198462d69ded74fa2b0eb5b2ca7401f4e924c6f67707be43f761a937d01397",
                " \"1c4b85bc16c940ddebd1bdfca61d7eb152f2d24b8738abbc042cad63abd388ed",
                " \"d9f33d100deff9e00bd88d195dcfdd26684654efa1d20ad27449d61efd7d7780"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1639,
                "newInLastHour": 7,
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
                "1[.]158[.]64[.]230",
                "1[.]159[.]52[.]66",
                "1[.]177[.]162[.]2",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5392,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5392,
                "newInLastHour": 5392,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]15[.]221[.]192",
                "1[.]15[.]227[.]58",
                "1[.]164[.]166[.]102"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21110,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21110,
                "newInLastHour": 21110,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://77[.]247[.]88[.]122:51350/i",
                "hxxp://112[.]239[.]89[.]64:54455/bin[.]sh",
                "hxxp://94[.]154[.]43[.]116/run[.]sh",
                "hxxps://xywz[.]betraca[.]bet/d7ae90f8-25dd-430d-97cf-5d22fe8bab5c",
                "hxxps://ichnwcqh[.]jadoobet[.]live/bf1c115f-812c-49cf-ba20-cd5a211c8b0f"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4318,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4318,
                "newInLastHour": 4197,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"winopenhaus4[.]zexorcloudsync[.]garden\"",
                " \"xywz[.]betraca[.]bet\"",
                " \"caeb[.]betraca[.]bet\"",
                " \"154[.]88[.]103[.]62:8885\"",
                " \"154[.]88[.]102[.]44:8885\""
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
            "iocCount": 10067,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10067,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a133ce088d9ead15855e1343b8e643736d47d7d9",
                "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
                "1199461c382373b4645960ca6875028d7c96ce16",
                "2516492455c882b6a07fbcb076f31a06b2a71963"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52963,
            "activeSources": 8,
            "criticalAlerts": 31664,
            "activeCampaigns": 234
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21593,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10071,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3554,
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
                "count": 21074,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]57[.]215[.]161:51040/i",
                    "hxxp://115[.]52[.]21[.]30:38573/i",
                    "hxxps://5r48e4d3[.]betturkey[.]bet/?ublib=19340331-dbd2-49d0-bbd3-eb9c1db40e24"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]158[.]64[.]230",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1673,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"196[.]251[.]121[.]183:443\"",
                    " \"106[.]13[.]74[.]185:443\"",
                    " \"139[.]155[.]157[.]79:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1418,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a338d0e652aeb230f0b42e3916ff0f8b86d7409",
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d"
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
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13"
                ]
            },
            {
                "name": "Vidar",
                "count": 622,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                    "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
                    "2516492455c882b6a07fbcb076f31a06b2a71963"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 430,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5r48e4d3[.]betturkey[.]bet\"",
                    " \"h3cyc1or[.]betturkey[.]bet\"",
                    " \"yfekdkqg[.]jadoobet[.]forum\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46093,
        "lastCalculated": "2026-07-12 12:13 IST"
    }
};
