// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-05T02:03:13.737253+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-05T02:03:13.427820+05:30",
    "lastUpdatedFormatted": "Jan 05, 2026 at 02:03 AM IST",
    "comparisonPeriod": "Jan 04 \u2013 Jan 05, 2026",
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
                "hxxp://www[.]alkjglkr[.]cc/",
                "hxxps://p1[.]etop[.]click/tiktok/boombox[.]html",
                "hxxps://panita[.]wpdevcloud[.]com/sayless/vo/biblioteca/payement[.]php",
                "hxxp://www[.]roblox[.]com[.]kz/users/1832287491/profile/",
                "hxxp://3p6f[.]info/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1353,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1353,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ad1a4d90b080563c08871b8f213d8eb94faccb99fc3f00730b2220816c739cb9",
                " \"886e0f4d1274f3072ef6fe0d8f7a995b461c3544135f17501695947eb6ad20a9",
                " \"35ff49f44bf7f505b5cef4dc4088e0019e31bfb89a1f632db1b14620a5b54027",
                " \"0b096e65e79c39ea927f18c51f8996262c4811979c5038d1caf2dc742b6c9c32",
                " \"b93dc603733662d5c5334167603583b0d1dec694685c1d59f5e3b0d95188ab49"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1468,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1468,
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
                "1[.]10[.]214[.]169",
                "1[.]10[.]214[.]187",
                "1[.]10[.]219[.]161",
                "1[.]11[.]85[.]36",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5745,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5745,
                "newInLastHour": 5745,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]162[.]246[.]79",
                "1[.]171[.]29[.]244",
                "1[.]171[.]31[.]156",
                "1[.]194[.]236[.]11"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24478,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24478,
                "newInLastHour": 24478,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://118[.]81[.]179[.]160:38035/i",
                "hxxps://z9bdth4n[.]blu3cioud[.]ru/?=check&&actmn=FvGtxDayZoYcjkIf",
                "hxxp://120[.]28[.]221[.]32:35214/i",
                "hxxp://110[.]37[.]102[.]162:52640/i",
                "hxxps://b76ctsj1[.]5kyline[.]ru/?=check&&actmn=wXqQaLCNSaYFpIHi"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 328,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 328,
                "newInLastHour": 328,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"b76ctsj1[.]5kyline[.]ru\"",
                " \"is9rzgzv[.]5kyline[.]ru\"",
                " \"95[.]181[.]160[.]249:80\"",
                " \"65[.]38[.]121[.]25:443\"",
                " \"heysenti[.]dedyn[.]io\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8711,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6bd23ff65ef66b7c0589133e5a3119f2d91ab3f1",
                "c8aad9c5f82a60570499842e439e5853a2a4fcf1",
                "6159992b2c6d63eb26c215499bba43316b6c91f7",
                "7cf99ff9b35a8f0a7307c92e3b1feeca96179038",
                "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52416,
            "activeSources": 8,
            "criticalAlerts": 34549,
            "activeCampaigns": 183
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25870,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8679,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 239,
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
                "count": 24439,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://release-assets[.]githubusercontent[.]com/github-production-release-asset/1127859862/608fcc5e-b316-4609-89d6-1f51f0af514f?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-01-04T19%3A40%3A57Z&rscd=attachment%3B+filename%3Dgstate&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-01-04T18%3A40%3A19Z&ske=2026-01-04T19%3A40%3A57Z&sks=b&skv=2018-11-09&sig=5FkCr4Yalha9dw2dBHa3TVgQCwbqZL6OjqOWw3zsnNA%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9[.]eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc2NzU1MjU2NSwibmJmIjoxNzY3NTUyMjY1LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ[.]bKWWDoxdM6A41QfUGhV2ALzjb5zgqs300beg-63KSj8&response-content-disposition=attachment%3B%20filename%3Dgstate&response-content-type=application%2Foctet-stream",
                    "hxxps://github[.]com/atoragivapo50/Flashbulb-Iodize/releases/download/123/gstate",
                    "hxxp://130[.]12[.]180[.]43/files/2090623753/N4xTvHP[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]169",
                    "1[.]10[.]214[.]187",
                    "1[.]10[.]219[.]161"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1467,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 799,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"velvetpaw2031[.]cfd\"",
                    " \"my-api-lol[.]xyz\"",
                    " \"hxxps://down[.]wincryptapi[.]com/download\""
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
                "count": 601,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 491,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2f1f64d4f130e3a1ae5f9bb799a72d4ecf2887de9e6694c6c63c0a9a221c4bf7",
                    " \"49baa52c3fda131a738b845c9f1010e361db5715ab76fb7ddffc9b5453476ffb",
                    " \"4fd9552897d87ab63fef8a228d25388101e549e12d233cf1b214922058dc5a73"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45902,
        "lastCalculated": "2026-01-05 02:03 IST"
    }
};
