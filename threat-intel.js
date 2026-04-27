// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-27T19:52:26.577945+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-27T19:52:26.221337+05:30",
    "lastUpdatedFormatted": "Apr 27, 2026 at 07:52 PM IST",
    "comparisonPeriod": "Apr 26 \u2013 Apr 27, 2026",
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
                "hxxps://twhsl-qkns-r1he[.]p-5jwrf2lw[.]workers[.]dev/l/Itoretlab@c7ba9ce67cf821a9e803adb8b42f73d73a15[.]net",
                "hxxp://twhsl-qkns-r1he[.]p-5jwrf2lw[.]workers[.]dev/l/Ikalex9@fbc48ba921a9454c7951fc2e954220916052[.]net",
                "hxxps://becareful[.]biezacefaktury[.]pl/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://comment[.]webaccess-alert[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://www[.]itau-landing[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1067,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1067,
                "newInLastHour": 159,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"46b2155c1e71b840d4b7a2e94410b89a61e2446523e6f497206d402eb02e0e93",
                " \"e037534a305e4fab86ba4418b73b203479da47bd3a196f8f0b825140d6b49a6a",
                " \"d036917b36bc67b5f2775ce9207fcf6d2f3b509963c6ee9d08488c75f8cbe5be",
                " \"cbb5f1c3a9be0703f6ed9098056ef203d862b8b07c9bc3e5e583a76a87551e8d",
                " \"4a9097921378b120ed7bc671a48715bcc8583256dff616b2abe5dddb48eb9aa8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1575,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1575,
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
                "1[.]10[.]133[.]201",
                "1[.]141[.]16[.]115",
                "1[.]169[.]39[.]171",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4252,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4252,
                "newInLastHour": 4252,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]145[.]117[.]19",
                "1[.]2[.]213[.]105",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26283,
                "newInLastHour": 26283,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://1r72in[.]sokla3ren[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://219[.]155[.]203[.]189:58705/bin[.]sh",
                "hxxp://110[.]37[.]61[.]34:50710/i",
                "hxxps://rn3tric-grid[.]sokla3ren[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxps://4hs7joli[.]sokla3ren[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 983,
                "newInLastHour": 980,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://bookshelfculture[.]com/\"",
                " \"hxxps://icebath[.]org[.]il/\"",
                " \"hxxps://petloverspalace[.]com/\"",
                " \"hxxps://bayviewgourmet[.]com/\"",
                " \"hxxps://ecocolours[.]in/\""
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
            "iocCount": 9606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9606,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "273c74ce7170a85b37f91741ce7faa534639e29a",
                "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                "baec0b516b841d0291da5463777d12e63c0851a9",
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d",
                "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54564,
            "activeSources": 8,
            "criticalAlerts": 36733,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27123,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9610,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 220,
                "trend": "up",
                "percentage": 27
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 83
            },
            {
                "name": "Tech",
                "percentage": 16
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
                "count": 26167,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://tj0x[.]eggman8eisha[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxps://campaigndefen[.]eggman8eisha[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxps://frwyaofu[.]eggman8eisha[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]141[.]16[.]115",
                    "1[.]169[.]39[.]171",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1591,
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
                "count": 1408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03",
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a"
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
                "name": "Vidar",
                "count": 510,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 484,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"frwyaofu[.]eggman8eisha[.]in[.]net\"",
                    " \"pb6cs[.]eggman8eisha[.]in[.]net\"",
                    " \"yj97hpfx[.]incub-teahouse[.]in[.]net\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 417,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e888d53936f8c959a15995fbe0aeb01c6b5a6ece11cb95b145f6ef4b81c7cf05",
                    " \"3fcc4b97270cb04e0f4a188ca6e60cfa137f2be8a5e9062fd997dd2df3dd33f3",
                    " \"319a722e907eebf9c0d17ab29f6e01b2f61c6b3ad87ebd70674ee4daa4b170bd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46988,
        "lastCalculated": "2026-04-27 19:52 IST"
    }
};
