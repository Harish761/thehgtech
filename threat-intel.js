// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-20T22:18:42.177343+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-20T22:18:41.889155+05:30",
    "lastUpdatedFormatted": "Jan 20, 2026 at 10:18 PM IST",
    "comparisonPeriod": "Jan 19 \u2013 Jan 20, 2026",
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
                "hxxp://bafybeibi3azpv4l5jnrkaudilpvkqxjtdhpateq642uaous4mckedowr3u[.]ipfs[.]dweb[.]link/",
                "hxxp://www[.]fysportscomplex[.]com/images/odu/",
                "hxxp://www[.]roblox[.]tc/communities/2145277001/LST/",
                "hxxp://satelliteoffice-1742766257[.]teamtailor[.]com/connect/dashboard",
                "hxxps://mssecuregateway[.]de/?mail=3mail@a[.]b[.]c0"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 857,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 857,
                "newInLastHour": 103,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"09ccc96116fe4a5a3fea84b917dff0447a33b20b4ee94e509e7a847e345c9953",
                " \"74ba7bda7428fabe614ade7fa8c478ef65b4f4cceb8c540a10c57523b9f56eed",
                " \"6a058069adac2a1688ab000c50dbc757eaf89ae8beff17387f00025ebfdb16d3",
                " \"7e2e35a51b1678aa0f83d6d30686d637b1895b0f633b041b89c20799198f85ec",
                " \"14ea6a572704ab568f379006e2557f52b53e36acd5ae1f39445875e51f3eab39"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1449,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1449,
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
                "1[.]0[.]202[.]30",
                "1[.]0[.]253[.]48",
                "1[.]1[.]140[.]172",
                "1[.]1[.]140[.]53",
                "1[.]170[.]9[.]121"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5926,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5926,
                "newInLastHour": 5926,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]251[.]79",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]234[.]70[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22234,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22234,
                "newInLastHour": 22234,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]84[.]212[.]183:53783/bin[.]sh",
                "hxxp://wsefghuiwehf[.]gxg[.]xxx/no_killer/Aqua[.]arm4",
                "hxxp://222[.]141[.]135[.]115:38372/bin[.]sh",
                "hxxp://wsefghuiwehf[.]gxg[.]xxx/Aqua[.]mpsl",
                "hxxp://wsefghuiwehf[.]gxg[.]xxx/no_killer/Aqua[.]arm6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 678,
                "newInLastHour": 416,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"34[.]224[.]40[.]193:33341\"",
                " \"68[.]154[.]52[.]76:4444\"",
                " \"144[.]31[.]165[.]49:8080\"",
                " \"77[.]110[.]106[.]209:45052\"",
                " \"136[.]24[.]173[.]249:7443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8798,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e1eee0b991daeddda5eb790822cace341505480d",
                "6ea8fc3980ed947d6d2c509c02a2e439c8d5f7e1",
                "9b483450f76d361de12dac4cdfe6370f291692b9",
                "61e69d864771077edac32b3fad04fbf6f6060929",
                "c8e6ce07c7fdb13a8c284698d3dd604857a1147e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49124,
            "activeSources": 8,
            "criticalAlerts": 31727,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22974,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8753,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 365,
                "trend": "stable",
                "percentage": -1
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
                "count": 22045,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]117[.]117[.]135:51795/i",
                    "hxxp://61[.]52[.]46[.]138:58668/bin[.]sh",
                    "hxxp://115[.]57[.]246[.]105:43235/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]202[.]30",
                    "1[.]0[.]253[.]48",
                    "1[.]1[.]140[.]172"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1448,
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
                "count": 1371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c",
                    "fb503acf7aee005f9d10bd635e9f6f8e12a1b309"
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d",
                    "588bfb310a84e9090cac64559864fb3ec92fc706"
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
                "count": 504,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ac102fce6371a61bbc5479fda0ccb86f8792204d73aeff7420b0a126f58a2809",
                    " \"e83181c9cfa83ccae5e36bd52561feec0ffb0cfff01c07f45d45f32e3ba276ca",
                    " \"867c8846c3e89809ed1b0107118925274c3648669f533e72dc9713821700a977"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 44015,
        "lastCalculated": "2026-01-20 22:18 IST"
    }
};
