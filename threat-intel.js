// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-10T22:34:51.326134+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-10T22:34:51.049960+05:30",
    "lastUpdatedFormatted": "Mar 10, 2026 at 10:34 PM IST",
    "comparisonPeriod": "Mar 09 \u2013 Mar 10, 2026",
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
                "hxxps://ts67877[.]com/",
                "hxxp://ipfs[.]io/ipfs/bafkreibesbicar5pwyptvbgcolebqw5vetkodmjc6t4nvryuax7olkulsq/?eta=3mail@a[.]b[.]c0",
                "hxxp://34155dh8[.]org/Mobile/index[.]html",
                "hxxp://roblox[.]com[.]ge/users/1322190005/profile",
                "hxxps://ts67866[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 709,
                "newInLastHour": 83,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fb2f882561d88269982f312c54cb6f599247500d75e90c0af5c4c9e75b5378a4",
                " \"c565bb6e2fe166f24f137d9a15b464ab8425dda447aeeb216aa1b7bbd2cd4f5f",
                " \"4e6510286238e7e1ea8faa3a1374233e5f321e905def433f8e769b95d6472b6a",
                " \"0ada96fe01fb58d986ec32056522e32aa04afe63e4c9ad6fc821319374864c95",
                " \"bb2f0788e93f795b141cc5701199d865f2c4a39b27b8a3675316df34b4468ff5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1529,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1529,
                "newInLastHour": 2,
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
                "1[.]15[.]51[.]236",
                "1[.]170[.]47[.]69",
                "1[.]180[.]115[.]126",
                "1[.]188[.]103[.]101",
                "1[.]192[.]177[.]65"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8325,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8325,
                "newInLastHour": 8325,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]162[.]231[.]28",
                "1[.]192[.]189[.]251",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19426,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19426,
                "newInLastHour": 19426,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]56[.]183[.]69:49208/bin[.]sh",
                "hxxp://222[.]138[.]134[.]251:51117/bin[.]sh",
                "hxxp://45[.]141[.]26[.]73/bins/sora[.]x86",
                "hxxp://115[.]62[.]133[.]145:59406/i",
                "hxxp://182[.]127[.]133[.]104:43283/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1125,
                "newInLastHour": 1114,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"w1n_554p[.]quantomix[.]in[.]net\"",
                " \"r5h_882c[.]quantomix[.]in[.]net\"",
                " \"onlinestore[.]footballtoolbox[.]net\"",
                " \"m2q_119x[.]quantomix[.]in[.]net\"",
                " \"b7y_400z[.]quantomix[.]in[.]net\""
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
            "iocCount": 9199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9199,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "581cff3c3ff5140030c1b2dae80093f37df765df",
                "7ca748d42ca714a0017f176dd942ae77739b34be",
                "abc97e073da46b3dfe0c8a5ccfc416eeb221631c",
                "80c481f9b55d711b33854644fd736f4b642b42b8",
                "597545892f122729047032705d557fe787138c32"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47139,
            "activeSources": 8,
            "criticalAlerts": 29177,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19983,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9194,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 462,
                "trend": "stable",
                "percentage": -4
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
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
                "count": 19316,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://tqiauc[.]soldop[.]in[.]net/verification[.]google",
                    "hxxp://42[.]55[.]2[.]130:55599/i",
                    "hxxp://115[.]63[.]55[.]105:42295/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]51[.]236",
                    "1[.]170[.]47[.]69",
                    "1[.]170[.]60[.]81"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1534,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "581cff3c3ff5140030c1b2dae80093f37df765df",
                    "6351234662461217b8b3178bd777b2dffe766ead",
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 396,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "597545892f122729047032705d557fe787138c32",
                    "8af633744198ffd5bb1e437173eb0292f95c668e",
                    "edda834f9d99ba5d22b01adfab9c69873fa7c47c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 394,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tqiauc[.]soldop[.]in[.]net\"",
                    " \"h4rd-cache[.]soldop[.]in[.]net\"",
                    " \"dispatc-tra[.]windev[.]in[.]net\""
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44260,
        "lastCalculated": "2026-03-10 22:34 IST"
    }
};
