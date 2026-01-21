// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-21T18:40:11.473568+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-21T18:40:11.197741+05:30",
    "lastUpdatedFormatted": "Jan 21, 2026 at 06:40 PM IST",
    "comparisonPeriod": "Jan 20 \u2013 Jan 21, 2026",
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
                "hxxps://aumentecredmais[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://sonolimite[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://pub-95aea34bd03a4baf92f94b485d409968[.]r2[.]dev/index[.]html",
                "hxxps://steamcommunitiy[.]com/tradeoffer/new/?partner=15452553&token=JwoXWWBb",
                "hxxp://webaccess-email[.]org/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 898,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 898,
                "newInLastHour": 188,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"75e50384053e487d49bae8f857fd39af0179c293496f0312072dbaf9af9c085c",
                " \"aa4959d2742fccc49fc802fea008809505927878c04759ef8353128f4fba518b",
                " \"cf47a12ab207f39bb11672dc366839a72b61ee81d0870edffa2c3c5c058a0e0e",
                " \"ab582206dc5682e528a6b1b5457661e5292acfb0a5a3aa4a2bd81f22cb3a1c73",
                " \"d254776c19d7155845241a875bcae4470f1a2692f04cd558966a7a8268a78836"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1453,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1453,
                "newInLastHour": 4,
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
                "1[.]0[.]170[.]118",
                "1[.]0[.]202[.]30",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]170[.]9[.]121"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6822,
                "newInLastHour": 6822,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]54[.]95",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21399,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21399,
                "newInLastHour": 21399,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]127[.]154[.]105:37782/i",
                "hxxp://182[.]121[.]81[.]191:60739/bin[.]sh",
                "hxxps://cdn[.]jsdelivr[.]net/gh/brush-tablet-win7/tg-sector-add/done",
                "hxxp://46[.]163[.]184[.]136:37956/i",
                "hxxp://125[.]43[.]8[.]23:55681/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 756,
                "newInLastHour": 495,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/brush-tablet-win7/tg-sector-add/done\"",
                " \"95mfmnebv9a1r[.]cfc-execute[.]gz[.]baidubce[.]com\"",
                " \"zrr[.]uk[.]com\"",
                " \"ucjnz[.]sa[.]com\"",
                " \"member77daftar[.]it[.]com\""
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
            "iocCount": 8802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8802,
                "newInLastHour": 19,
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
            "totalIndicators": 48336,
            "activeSources": 8,
            "criticalAlerts": 30866,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22104,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8762,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 427,
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
                "name": "malware_download",
                "count": 21270,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]39[.]143:47181/i",
                    "hxxp://60[.]23[.]235[.]129:55363/i",
                    "hxxp://60[.]23[.]235[.]129:55363/bin[.]sh"
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
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1449,
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
                "count": 1373,
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
                "count": 607,
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
                "count": 362,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b4fff2ce77b0970f1359ba7cb7b6df24dff91f911cbcd9195224fedf42b70b44",
                    " \"92488635744d2b775edb6c085344bbb58f61fdfb191166dddf2b4e7c7b1b142c",
                    " \"e91f824c0ceb0954b02b418644f2862879df70e94280e36834a4b1524b8e267f"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44233,
        "lastCalculated": "2026-01-21 18:40 IST"
    }
};
