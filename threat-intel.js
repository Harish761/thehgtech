// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-16T04:30:35.602983+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-16T04:30:35.104375+05:30",
    "lastUpdatedFormatted": "Oct 16, 2026 at 04:30 AM IST",
    "comparisonPeriod": "Oct 15 \u2013 Oct 16, 2026",
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
                "hxxp://sp22ct-zarur-biz-loru-kemu[.]pages[.]dev/",
                "hxxps://sp33ct-fenaru-biz-kelovi-maneto[.]pages[.]dev/",
                "hxxps://buzqari-mpt-felvuno-p4d9ka86[.]pages[.]dev/",
                "hxxp://mt1xv-55n-xil2-hbkcy-30-09-2026-hh[.]pages[.]dev/",
                "hxxp://sp22ct-vemak-biz-keli-pazu[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1029,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1029,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"dfd08e1d7a34bae6836b3915b45b8637b85cdc998198c5bf148fba5e96f15c21",
                " \"3c51e5995af60587fbf019f11f94d843b8ae3fb82786b6bd468bc60660783fc5",
                " \"037b186f042dcf9205fbaf2156965422201be1bbf3e65f7998a8dccb77f6dcf3",
                " \"47fb5347bb16aac0edc445d921531655792986422c739ba25695c003f7b94c7d",
                " \"0b1ecf0c0fe1a9b12bb069648e1b3c758e7187c3bceb0097bcaea3f2ea61640f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
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
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]179[.]240[.]111",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4148,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4148,
                "newInLastHour": 4148,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]179[.]232[.]194",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34102,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34102,
                "newInLastHour": 34102,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]225[.]99[.]51:58007/i",
                "hxxp://61[.]133[.]30[.]139:43947/i",
                "hxxp://42[.]177[.]21[.]160:39514/i",
                "hxxp://115[.]49[.]69[.]231:44643/i",
                "hxxps://anthonyspizzeriainc[.]com/microsoft_store/download/version/93[.]11[.]1/2fa_code_engine[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8115,
                "newInLastHour": 7196,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://sa[.]888-fw[.]com/lk\"",
                " \"0d8cdcb2d71adf2c3dab3475154b40c4388eb8d54fea4544de0218d94b714513\"",
                " \"hxxps://sa[.]888-fw[.]com/vb\"",
                " \"hxxps://sa[.]888-fw[.]com/jqz\"",
                " \"hxxps://sa[.]888-fw[.]com/jqz/\""
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
            "iocCount": 10970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10970,
                "newInLastHour": 52,
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
            "totalIndicators": 71456,
            "activeSources": 8,
            "criticalAlerts": 46055,
            "activeCampaigns": 303
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35159,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10896,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6614,
                "trend": "stable",
                "percentage": 0
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
                "count": 34094,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]157[.]186[.]140:47861/i",
                    "hxxp://113[.]236[.]92[.]29:52754/bin[.]sh",
                    "hxxp://182[.]127[.]111[.]173:40844/i"
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
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 2072,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://m7[.]86idn[.]com/ss\"",
                    " \"hxxps://m7[.]86idn[.]com/vo\"",
                    " \"hxxps://m7[.]86idn[.]com/k/\""
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
                "count": 1456,
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
                "count": 1276,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"203[.]98[.]68[.]25:443\"",
                    " \"89[.]40[.]105[.]179:8080\"",
                    " \"89[.]40[.]105[.]179:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 835,
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
                "count": 717,
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
                "count": 644,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"78[.]142[.]218[.]10:56002\"",
                    " \"5[.]189[.]168[.]42:20001\"",
                    " \"38[.]49[.]214[.]29:56002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 60809,
        "lastCalculated": "2026-10-16 04:30 IST"
    }
};
