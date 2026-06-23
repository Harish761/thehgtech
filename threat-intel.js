// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-23T16:56:12.324527+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-23T16:56:11.946970+05:30",
    "lastUpdatedFormatted": "Jun 23, 2026 at 04:56 PM IST",
    "comparisonPeriod": "Jun 22 \u2013 Jun 23, 2026",
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
                "hxxp://qarzdeals[.]com/steve/netflix",
                "hxxps://azfit[.]com[.]br/sahmel/associates[.]html",
                "hxxp://www[.]amazon-app7[.]biz[.]id/",
                "hxxp://aizhara[.]apsny[.]land/assfv43/log[.]php/",
                "hxxps://clone-project-omega[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 698,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3157775b29f8fbeb125ffd3f34cb0d0e599fdd4f53a11eecc750cfff25e3df00",
                " \"dd6e4b9171afc1ab47c35482ccbd30ab4beabdc1e41c762de9e0e5dcef0499cb",
                " \"e972c239b19da4f923e898520439a093a8dc47ebbe582bb88e144bdabc0844b8",
                " \"f56297a4158c79b49c9079ba634ea9595461717fb0955affe308ea05633ec9f1",
                " \"dad8e703aa0e0077992d417f2825b9fd7b3c54058f76212547ffb0da2e072e02"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]35[.]79",
                "1[.]171[.]171[.]216",
                "1[.]171[.]25[.]81"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4664,
                "newInLastHour": 4664,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]28[.]29",
                "1[.]160[.]229[.]25",
                "1[.]162[.]239[.]42",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22575,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22575,
                "newInLastHour": 22575,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://177[.]36[.]61[.]196:38572/i",
                "hxxp://182[.]126[.]141[.]199:46541/i",
                "hxxp://157[.]211[.]178[.]212:50172/i",
                "hxxp://220[.]184[.]170[.]118:56953/bin[.]sh",
                "hxxps://2b4zfudu[.]ekhtelalat[.]xyz/?ublib=c3a07065-8e54-4976-92dd-0d1f14b3e07d"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4837,
                "newInLastHour": 4387,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"2b4zfudu[.]ekhtelalat[.]xyz\"",
                " \"ekhtelalat[.]xyz\"",
                " \"hxxp://62[.]60[.]226[.]159/post[.]php\"",
                " \"verification-code-js[.]beer\"",
                " \"verification-claude-cdn[.]beer\""
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
            "iocCount": 9985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9985,
                "newInLastHour": 48,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "930ad835b903af414bb1a64dc5184fe8850b0d9c",
                "696e8986d2a5ecc7deacdedf0efecd16f249befe",
                "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                "d1421c00fed86ca8b65f1617019fd1a0ceed22a7",
                "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54842,
            "activeSources": 8,
            "criticalAlerts": 33062,
            "activeCampaigns": 262
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23096,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9966,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3739,
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
                "count": 22383,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]205[.]183:34250/bin[.]sh",
                    "hxxp://124[.]94[.]173[.]123:52089/i",
                    "hxxp://42[.]235[.]90[.]140:35939/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]176[.]118[.]246",
                    "1[.]192[.]177[.]156"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1693,
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
                "count": 1435,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"121[.]4[.]76[.]54:80\"",
                    " \"42[.]193[.]15[.]237:9001\"",
                    " \"121[.]4[.]76[.]54:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d",
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 591,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85b767752d352a3203c71f6b61fd32aeae6a806b",
                    "a75653fb0d720b53ce06b75400144f7348f56859",
                    "74c412ddb5e5ff23d519ed7f6c71d99fb8ffbaef"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "name": " \"unknown\"",
                "count": 530,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://ext2[.]info/time[.]php\"",
                    " \"hxxps://yodonoplasma[.]es/\"",
                    " \"hxxp://192[.]142[.]28[.]77/bachekuni/ohshit[.]x86\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47089,
        "lastCalculated": "2026-06-23 16:56 IST"
    }
};
