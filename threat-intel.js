// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-13T03:42:00.491832+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-13T03:42:00.137194+05:30",
    "lastUpdatedFormatted": "Sep 13, 2026 at 03:42 AM IST",
    "comparisonPeriod": "Sep 12 \u2013 Sep 13, 2026",
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
                "hxxp://sp32ct-dalrex-biz-vornik-cesla[.]pages[.]dev/",
                "hxxps://vwwv-roblox[.]co/users/1515798849/profile",
                "hxxps://roblox[.]com[.]bo/communities/488688266/",
                "hxxp://intrepid-amused-analysts--vdsbwa[.]replit[.]app/",
                "hxxp://www[.]your-order-logistics-global-tracking[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 423,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"90e2c6ef2062148c89b4b66d3cfbf75012a273ff9ec5bc1a6a88215ac4b340fd",
                " \"89ea7049eae2af35ebbd64531a11d50f9364992db0dc8960b8961551289779cd",
                " \"434ffec81e6c1be4873754fa5854fd6c5b3d387a4b9f2119a7bfec8bbe181d9f",
                " \"ede450e3c9f6bdfc7de2fbda91eac908510f970a1e1e17bebb8fb9ecd1721342",
                " \"893c62949e0430b65f75f2b28b565fa0b056dfc9dea24ae795577788fedac3f6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1673,
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
                "1[.]10[.]172[.]57",
                "1[.]15[.]14[.]29",
                "1[.]159[.]111[.]86",
                "1[.]183[.]41[.]170",
                "1[.]188[.]100[.]134"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11256,
                "newInLastHour": 11256,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12693,
                "newInLastHour": 12693,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]dropbox[.]com/scl/fi/0uo36mnwpsr3pkimq0tbw/installer[.]exe?rlkey=y809n84pzpul9hs33ihya6qcj&st=gy1s1dqs&dl=1",
                "hxxp://64[.]89[.]160[.]197/bot_client_mipsle",
                "hxxp://64[.]89[.]160[.]197/bot[.]b64",
                "hxxp://64[.]89[.]160[.]197/bot_client_mips",
                "hxxp://64[.]89[.]160[.]197/bot_client_mips64le[.]b64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11434,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11434,
                "newInLastHour": 8377,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"59[.]110[.]153[.]133:22\"",
                " \"154[.]91[.]56[.]111:8074\"",
                " \"154[.]91[.]56[.]112:8074\"",
                " \"154[.]91[.]56[.]113:8074\"",
                " \"jeqawoha[.]workers[.]dev\""
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
            "iocCount": 2092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2092,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a",
                "93edc2f5b2504b5700af766157b2aa96d1edd20f",
                "c78af78d930e82506823c8ececf1140c7035d8ef",
                "74afa65e38769e7e58835fd799e353c2fea3a209"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52446,
            "activeSources": 8,
            "criticalAlerts": 23785,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13111,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10674,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4486,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "malware_download",
                "count": 12666,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://88[.]246[.]126[.]132:34502/i",
                    "hxxp://124[.]94[.]203[.]196:34272/i",
                    "hxxp://42[.]230[.]29[.]94:38010/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]160[.]198:2026\"",
                    " \"ea0ac7277d0fdf801972b56bdc57184fc51ac8be47438873396436736f3694a9\"",
                    " \"ea0c84717977b89e7c7c885c68ac7ab4d8e561044cd93b47f3ddf830f9f688cd\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1847,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bikecondition[.]cfd\"",
                    " \"ce9c1422af2c16af682eac479c3f9c57959beb355b22ba72de8c10c4078eb8db\"",
                    " \"7f47e02e297a35fabb1fb2a2e195e3dae5ff8ecfe7b201fed189d14e54124d2e\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1722,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]51[.]230[.]17:53001\"",
                    " \"38[.]76[.]183[.]197:8806\"",
                    " \"165[.]154[.]68[.]30:4433\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1303,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cf-check[.]site\"",
                    " \"authshipup[.]net\"",
                    " \"runtimerailbit[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 919,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"0hd4saaw[.]bossizmit[.]store\"",
                    " \"as9e2wvl[.]leswap[.]store\"",
                    " \"leswap[.]store\""
                ]
            },
            {
                "name": "Vidar",
                "count": 776,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38",
                    "00095e3cd5dfc929d16036132665d7e3e9ef7cd6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47638,
        "lastCalculated": "2026-09-13 03:41 IST"
    }
};
