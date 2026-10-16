// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-17T03:05:13.151148+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-17T03:05:12.724698+05:30",
    "lastUpdatedFormatted": "Oct 17, 2026 at 03:05 AM IST",
    "comparisonPeriod": "Oct 16 \u2013 Oct 17, 2026",
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
                "hxxp://help-contact-757643[.]vercel[.]app/",
                "hxxp://vajrapu-rutvika[.]github[.]io/netflix-ui-clone",
                "hxxp://info-resmiid[.]blogspot[.]com/",
                "hxxps://f005[.]backblazeb2[.]com/file/jugueh/SignintoXfinity[.]html",
                "hxxps://f005[.]backblazeb2[.]com/file/Xfinitytvconnect/SignintoXfinity[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 606,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"104a6e4b1da8f7b42bdaf887b82f2c12348c6b1ffe52d1de2d964b6329492ad7",
                " \"f0719174d2c90247a329907a28811a22521dcd8b0baf66b4ca202b1a1b82e868",
                " \"d5862fa98e68f8a5acf19c09058778c5aa72c402e4d9689cdf35a105ee49b4f3",
                " \"b83b4bce52a29a8ce1acb635c455595487725ebe7888cdfa7173f1382305425e",
                " \"823efb0d0247dd4d178f07e6ac7a564697ddac95036f311ef1beabd5f4cfd71e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 12,
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]171",
                "1[.]192[.]216[.]192",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4259,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4259,
                "newInLastHour": 4259,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]179[.]232[.]194",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33867,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33867,
                "newInLastHour": 33867,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://138[.]204[.]196[.]244:57205/bin[.]sh",
                "hxxp://115[.]62[.]183[.]111:39237/i",
                "hxxp://42[.]227[.]179[.]51:54103/i",
                "hxxp://125[.]41[.]8[.]70:42191/i",
                "hxxp://42[.]230[.]33[.]216:59631/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8610,
                "newInLastHour": 7165,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yutpn23730[.]workers[.]dev\"",
                " \"zcuar44747[.]workers[.]dev\"",
                " \"b6d2a1dd5bac39f5d84f0aa781b1cb531b96411b0f0f2195444e1bf15b74abc9\"",
                " \"4e180156d2b0d6c13d57b65999cf45393afdaa1f3181e0aafc26686a4795f9e1\"",
                " \"b05f75e7fad53ada4a99d4ee157560fde73cc245ede5a4a329b2b5c11c44dc50\""
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
            "iocCount": 10953,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10953,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 70891,
            "activeSources": 8,
            "criticalAlerts": 45306,
            "activeCampaigns": 284
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34420,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10886,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6335,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 302,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 33822,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://redxcvfsdgth[.]info/Down/CFETEITServicio[.]apk",
                    "hxxps://cdn[.]monther[.]life/DvnX[.]zip",
                    "hxxps://nova-75[.]com/f/vrhqljbnscwhbyhltuwmsq/t2990cmj"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 1898,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xi[.]88bravo[.]com\"",
                    " \"hxxps://xi[.]88bravo[.]com/\"",
                    " \"hxxps://xi[.]88bravo[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1678,
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
                "count": 1458,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1277,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]236[.]130[.]154:9999\"",
                    " \"financiales-groupe[.]com\"",
                    " \"47[.]97[.]206[.]32:50050\""
                ]
            },
            {
                "name": "Vidar",
                "count": 818,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d",
                    "c389945d4fc75250b291953e0abad0662dd9ce7d"
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
                "count": 718,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 633,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://conntent[.]s4solar[.]co[.]nz/download[.]php/Complete_Condition_Assessment_MP4\"",
                    " \"94[.]154[.]32[.]27:56003\"",
                    " \"45[.]139[.]104[.]29:49101\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 60711,
        "lastCalculated": "2026-10-17 03:05 IST"
    }
};
