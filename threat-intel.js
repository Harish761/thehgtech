// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-30T00:52:54.803100+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-30T00:52:54.515259+05:30",
    "lastUpdatedFormatted": "Aug 30, 2026 at 12:52 AM IST",
    "comparisonPeriod": "Aug 29 \u2013 Aug 30, 2026",
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
                "hxxps://cancelcardiffbahora[.]vercel[.]app/",
                "hxxps://qg77-ljfe-7fsc[.]chris-titanbooths-com-s-account[.]workers[.]dev/",
                "hxxps://facebook-qa[.]blogspot[.]com/",
                "hxxp://reoahf6k11-0920c60ff6[.]vercel[.]app/meta-support-3251713518098735[.]html",
                "hxxp://5jjen4v70c-d10b33caf0[.]vercel[.]app/meta-request-0004002080754887[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 833,
                "newInLastHour": 150,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"caa58a4d69af408999c315eff45b8226314f51abdc9398deab82c2e330759831",
                " \"c2333675b31327fbc5937278e0311bc5563bed1ab4fdea25f3761978fb797368",
                " \"9e4263869b57f12749456081d91a19476cf8820bf3a83ace5844510fcaa0d21a",
                " \"050cdacf5aa6963731a398857ee4e660d8091c314b3172a789ef3f06ef4b0189",
                " \"8445c3ed00e07796952e38bf0166c75b75731ed54932494c9f23eba1abd412f8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1694,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1694,
                "newInLastHour": 49,
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
                "1[.]177[.]162[.]4",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]192[.]129[.]106",
                "1[.]193[.]2[.]85"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13125,
                "newInLastHour": 13125,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182",
                "1[.]171[.]123[.]41"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15666,
                "newInLastHour": 15666,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]203[.]210[.]102:39213/bin[.]sh",
                "hxxp://196[.]189[.]197[.]131:43972/i",
                "hxxp://42[.]55[.]60[.]82:41723/i",
                "hxxp://182[.]112[.]29[.]80:37188/bin[.]sh",
                "hxxp://120[.]28[.]194[.]30:58329/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6951,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6951,
                "newInLastHour": 6673,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lyzazusu[.]workers[.]dev\"",
                " \"38lhdq9v9t[.]workers[.]dev\"",
                " \"159[.]198[.]75[.]180:7443\"",
                " \"43[.]163[.]88[.]35:445\"",
                " \"hxxps://clickzona[.]net/embed/\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 10576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10576,
                "newInLastHour": 8604,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "be12aa485facf3375cc2416e1f8fb28541136b83",
                "d43c9f366658adf98f67c12dd8fcb3bca52db900",
                "b34240912bc1f09b2e2342363647616b1088a1b0",
                "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                "ddfdf0aa1923b91144b9886e63430e063ad115a8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 42354,
            "activeSources": 7,
            "criticalAlerts": 18410,
            "activeCampaigns": 147
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16430,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4258,
                "trend": "stable",
                "percentage": -6
            },
            {
                "category": "C2",
                "count": 1980,
                "trend": "down",
                "percentage": -81
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
                "count": 15624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]138[.]151[.]125:34037/bin[.]sh",
                    "hxxps://mon-xxx-02[.]cfd/FirertjuDispatcher[.]exe",
                    "hxxps://85[.]121[.]176[.]140/Bin/ScreenConnect[.]ClientSetup[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]160[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1656,
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
                "name": " \"js.iclickfix\"",
                "count": 1499,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tin[.]tokyo77hit[.]com\"",
                    " \"piomilokao[.]icu\"",
                    " \"vailora231[.]life\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1343,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]163[.]88[.]35:8080\"",
                    " \"43[.]163[.]88[.]35:137\"",
                    " \"43[.]163[.]88[.]35:443\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 696,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"embersummit[.]cfd\"",
                    " \"440c[.]en-us-theeloncod[.]com\"",
                    " \"zupee[.]download\""
                ]
            },
            {
                "name": "Vidar",
                "count": 538,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d43c9f366658adf98f67c12dd8fcb3bca52db900",
                    "ef5c2a4999763064e2213dbe1c8ed696c0e8914b",
                    "8508e14457ad7de321edddf3688e124d5f1d652c"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 531,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]111[.]198[.]212:56013\"",
                    " \"163[.]5[.]210[.]229:443\"",
                    " \"84[.]201[.]20[.]74:56001\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]192[.]105[.]141:60000\"",
                    " \"220[.]154[.]128[.]196:9443\"",
                    " \"45[.]192[.]105[.]141:18317\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"80[.]190[.]77[.]86:10700\"",
                    " \"46[.]109[.]235[.]15:7707\"",
                    " \"169[.]58[.]180[.]142:30300\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 59567,
        "lastCalculated": "2026-08-30 00:52 IST"
    }
};
