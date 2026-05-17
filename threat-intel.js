// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-17T19:23:19.425414+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-17T19:23:19.117455+05:30",
    "lastUpdatedFormatted": "May 17, 2026 at 07:23 PM IST",
    "comparisonPeriod": "May 16 \u2013 May 17, 2026",
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
                "hxxps://cn[.]mpmxzu[.]com/home/register?code=49443",
                "hxxps://roblox[.]com[.]ml/users/246689392158/profile",
                "hxxp://www[.]s[.]id/robloxusers3316424profile/",
                "hxxps://sahithikamma[.]github[.]io/Netflix-Clone/",
                "hxxps://avanteshipping[.]com/wp-content/aktualisierung/easybk-de/lg/7WEVBU8090/Select/login[.]php?cgi=GiELKO3wYgb73SkZHcabpx57rVT8RQgiiAohZwh067Pf9jqiAMA3n55UAdzdQBRNvcgI3qsG3aGiDzWnC3O4FPRkDXr6VwYkuCzMy4yEiLJh9"
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
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"39fda31dc483ebbf92c2ff35d3da9fbf078abba5b4506d8d3ba33e6bb1c4de39",
                " \"20a313596d188a01dddf4d99ace74172acb64110b3743c96bb11849f0b52824b",
                " \"0379e4601dac111bf70292576219eb5273da547af5f35033b6eadc48bc5d2200",
                " \"16735cb80d796865b2430aa11d21a539fcb00b027932f2c63e4b5c098d26585b",
                " \"e3153ced59bb0376186b0eee0ec68f0b5aa9ae5820ef8508ae4e67625e1a3581"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1612,
                "newInLastHour": 14,
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
                "1[.]11[.]228[.]4",
                "1[.]140[.]8[.]117",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]156[.]141[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5271,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5271,
                "newInLastHour": 5271,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]205[.]204[.]213",
                "1[.]214[.]117[.]218",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24818,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24818,
                "newInLastHour": 24818,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]210[.]194:44931/i",
                "hxxps://great-fauna-tcpipgay-go-system[.]garden/d6ce0e64-d74c-4fcf-976a-799cadc7963b/google[.]ct",
                "hxxp://123[.]9[.]93[.]220:57721/i",
                "hxxp://110[.]36[.]2[.]23:41430/i",
                "hxxps://docktan-flexo-avastpig-engine[.]garden/4ab011f6-b93a-41e2-9575-1950f87feb78/google[.]ct"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 645,
                "newInLastHour": 523,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"great-fauna-tcpipgay-go-system[.]garden\"",
                " \"docktan-flexo-avastpig-engine[.]garden\"",
                " \"glow-hub-herboron-sixoauth-work[.]garden\"",
                " \"nwwwbkkv[.]network-horizon[.]digital\"",
                " \"23dcbt0c[.]network-horizon[.]digital\""
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
            "iocCount": 9638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9638,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                "42874ed125e23b73be13b7b8a7b89305ce979661",
                "bb1df8c1e6236408eb85294e9ce002f9222e57db",
                "fe322929a69e13348a8824c9eb27d58d8a82313b",
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52842,
            "activeSources": 8,
            "criticalAlerts": 35102,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25441,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9661,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 453,
                "trend": "up",
                "percentage": 96
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24741,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]38[.]176:54003/i",
                    "hxxp://110[.]37[.]38[.]176:54003/bin[.]sh",
                    "hxxp://27[.]37[.]115[.]147:41074/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]8[.]117",
                    "1[.]15[.]51[.]236",
                    "1[.]156[.]141[.]253"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
                "count": 1409,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
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
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
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
                "count": 531,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661",
                    "bb1df8c1e6236408eb85294e9ce002f9222e57db"
                ]
            },
            {
                "name": "OffLoader",
                "count": 403,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
                    "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
                    "06e08670cd781e40cee3c93163c7d29ea73d4acb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45954,
        "lastCalculated": "2026-05-17 19:23 IST"
    }
};
