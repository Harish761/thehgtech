// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-28T17:18:43.187586+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-28T17:18:42.943136+05:30",
    "lastUpdatedFormatted": "May 28, 2026 at 05:18 PM IST",
    "comparisonPeriod": "May 27 \u2013 May 28, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bi/games/102168567330694/Character-Talk?privateServerLinkCode=35976373059471016383959043181064",
                "hxxp://gentle-dusk-cb42a7[.]netlify[.]app/",
                "hxxps://airbnb-ui-clone-two[.]vercel[.]app/",
                "hxxp://secure-page-editor--schoolfeesinabu[.]replit[.]app/",
                "hxxps://www[.]mottomuskk_olginix[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 823,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 823,
                "newInLastHour": 102,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6c88a492f753cb10db03eef496e24f04ea3170fe96fd439368a3769b75e66a0b",
                " \"097d580b48397feb458bed57eceeaf89b6e0deff578f7e2a1320aeda8c98e8bb",
                " \"5aca662f645dcf0861349b1b5087ba7f8b833cf9d2282fabee7397fbbb9069f9",
                " \"7c1f99dca8e5a7897892f9d224a6495023a2cfd2671697d229d355978c415ed2",
                " \"eff53185baddf63b12ce35450fb5ff8dd0951c1e561d7e042e8a630efa28268e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1600,
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
                "1[.]1[.]223[.]16",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]162[.]111[.]181",
                "1[.]171[.]150[.]9"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5715,
                "newInLastHour": 5715,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]217[.]80",
                "1[.]12[.]222[.]63",
                "1[.]192[.]191[.]10",
                "1[.]194[.]210[.]131"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21193,
                "newInLastHour": 21193,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/Loader[.]zip?ref_type=heads",
                "hxxps://tempshare[.]su/files/FqxwNir05YR2",
                "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/dk[.]zip?ref_type=heads",
                "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/test[.]zip?ref_type=heads",
                "hxxps://gitlab[.]com/Hoangdepzaivcl/ccc/-/raw/main/s/s[.]exe?ref_type=heads"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3387,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3387,
                "newInLastHour": 3373,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"p5f6dr8y[.]padelconstruct[.]hu\"",
                " \"r8jg3f99[.]padelconstruct[.]hu\"",
                " \"gptjr[.]visszateritok[.]net\"",
                " \"wiouy[.]visszateritok[.]net\"",
                " \"gppcdnns[.]beer\""
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
            "iocCount": 9707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9707,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1fe4d1c9b7106f25e606894cb6a64f69c4862b29",
                "5d7baf5503517e28f05467332d905eb8193e651b",
                "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                "572a6064cb85cd5eef1204d45625640cf982c1ce",
                "2de4fd0094bc96c8339f3b8c67985f8a7b89b84a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52047,
            "activeSources": 8,
            "criticalAlerts": 31638,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21859,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9779,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3029,
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21001,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://gbhij[.]vilagom[.]hu/ad7bd207-8d54-46d0-94c8-d1156f22e21b",
                    "hxxp://42[.]228[.]35[.]95:39728/i",
                    "hxxp://125[.]47[.]85[.]53:37629/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1608,
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
                "count": 1426,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"151[.]245[.]195[.]160:443\"",
                    " \"62[.]192[.]173[.]249:9527\"",
                    " \"8[.]134[.]70[.]73:9999\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
                ]
            },
            {
                "name": "Vidar",
                "count": 555,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0e5e7e69a3b202c3bcbe3ad00778738ac17b337a",
                    "35948245936a76dac42eb2b622438ff77092390b",
                    "a3bd3a9c3cc6a21af873b9f654799e345a23f8dd"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 421,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e",
                    "9364c682044d04a298c3fdbfa767aaea8fe8d58d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45703,
        "lastCalculated": "2026-05-28 17:18 IST"
    }
};
