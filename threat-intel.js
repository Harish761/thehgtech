// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-26T02:02:06.966403+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-26T02:02:06.544750+05:30",
    "lastUpdatedFormatted": "Jun 26, 2026 at 02:02 AM IST",
    "comparisonPeriod": "Jun 25 \u2013 Jun 26, 2026",
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
                "hxxps://secure-trzo-start-us[.]square[.]site/",
                "hxxps://www[.]roblox[.]com[.]bi/games/105742951729183/Race-Your-Lucky-Block?game_id=105742951729183&game_name=Race-Your-Lucky-Block&privateServerLinkCode=29383763406896541593443970804931",
                "hxxps://sso-security[.]com/E[.]AW1oEMC7jst1yas?=userid",
                "hxxp://codebulletin[.]github[.]io/Facbook-Login-Page-Clone",
                "hxxps://www[.]croatiapools[.]com/DK/DKB/dkb/login[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 546,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 546,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"626fee2f23932a2e01ffd529420506583a9c670fb545a3a6bbe8041763bd1518",
                " \"748e6893727100c5efac1ddab664694b92c73e3b57769019d411712bebc7cae0",
                " \"3bea8f120a6006083937a8a990c351f4784ce9f9ec8397345448f1f65da2d7ab",
                " \"cc0daf1698d001cea803ca9e6a98c9b6904daf9e66744acbbc3eb019146b4c8d",
                " \"98632669b75fcc8e0e4f98eeeb20e0944ccf51f73d0c92b811354bd9e62f5212"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1615,
                "newInLastHour": 11,
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
                "1[.]11[.]228[.]4",
                "1[.]119[.]194[.]226",
                "1[.]159[.]114[.]184",
                "1[.]177[.]162[.]2",
                "1[.]183[.]161[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4433,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4433,
                "newInLastHour": 4433,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]15[.]135[.]116",
                "1[.]15[.]221[.]192",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22835,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22835,
                "newInLastHour": 22835,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]57[.]201[.]49:55454/i",
                "hxxp://125[.]44[.]46[.]116:38648/i",
                "hxxp://112[.]246[.]118[.]194:44945/bin[.]sh",
                "hxxp://95[.]106[.]1[.]158:4993/bin[.]sh",
                "hxxp://42[.]55[.]31[.]123:38986/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4603,
                "newInLastHour": 4548,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"172[.]245[.]196[.]240:443\"",
                " \"80[.]78[.]18[.]106:443\"",
                " \"154[.]222[.]16[.]38:8888\"",
                " \"217[.]60[.]97[.]3:8899\"",
                " \"217[.]60[.]195[.]194:14645\""
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
            "iocCount": 10019,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10019,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe",
                "03574e3801865919645fe101df0b05cf1cd75859",
                "0de71d162acb75d41aa2573e75c211deaa50024e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54875,
            "activeSources": 8,
            "criticalAlerts": 33419,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23369,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10050,
                "trend": "up",
                "percentage": 572
            },
            {
                "category": "Botnet",
                "count": 3517,
                "trend": "stable",
                "percentage": 2
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
                "count": 22797,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]39[.]241[.]60:52053/bin[.]sh",
                    "hxxp://115[.]52[.]70[.]16:55222/i",
                    "hxxp://190[.]109[.]227[.]30:55441/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]119[.]194[.]226",
                    "1[.]159[.]114[.]184"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1445,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"130[.]94[.]59[.]160:443\"",
                    " \"52[.]86[.]125[.]111:443\"",
                    " \"boldtop[.]click\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
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
                "count": 688,
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
                "count": 617,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e",
                    "29e911278a8f4291b3db0684b0ea6a31c6accc9a"
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
                "name": "OffLoader",
                "count": 433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fa1ffe8c35c3aab0195800f52cf831125eeb4698",
                    "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                    "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.coinminer\"",
        "totalAttacksThisHour": 47201,
        "lastCalculated": "2026-06-26 02:02 IST"
    }
};
