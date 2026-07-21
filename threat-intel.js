// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-21T23:09:17.665807+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-21T23:09:17.290982+05:30",
    "lastUpdatedFormatted": "Jul 21, 2026 at 11:09 PM IST",
    "comparisonPeriod": "Jul 20 \u2013 Jul 21, 2026",
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
                "hxxp://dexmetal[.]hu/wordpress/pdfdocument/open_documents_pdf/index[.]php/",
                "hxxps://wslog[.]com[.]br/it/persone-e-famiglie/content/internetbanking/common/extra-content-login/login-page[.]html",
                "hxxps://wslog[.]com[.]br/it/persone-e-famiglie/content/internetbanking/common/extra-content-login/",
                "hxxps://avanteshipping[.]com/wp-includes/css/cp",
                "hxxps://avanteshipping[.]com/wp-includes/css/cp/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 888,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"26861b70a4608bdbf702598ea84a4f09103df8304e943117440b75e1e51803bd",
                " \"d3a77efd9b454c113b91535987010bf93df630ef63e51fbe599321e2bc399024",
                " \"9c074ed10a29d98dce19f36bd211e3b476e273bb4dfc2800f234a3b64386aed5",
                " \"5cb66e406686baad686a0aefc1a722b240563d9018b8000a86adfed4137945e0",
                " \"836d18ddae8a91b1ce6a2d79722f7115ee3b0358060160c585ff2c891023883c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1668,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1668,
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
                "1[.]119[.]194[.]226",
                "1[.]159[.]90[.]31",
                "1[.]183[.]161[.]88",
                "1[.]190[.]44[.]125",
                "1[.]192[.]177[.]159"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5922,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5922,
                "newInLastHour": 5922,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]162[.]62[.]76",
                "1[.]192[.]63[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20532,
                "newInLastHour": 20532,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]49[.]16[.]251:48030/bin[.]sh",
                "hxxp://42[.]234[.]233[.]100:57803/bin[.]sh",
                "hxxp://182[.]113[.]28[.]236:53434/i",
                "hxxp://123[.]10[.]71[.]51:59319/bin[.]sh",
                "hxxp://125[.]43[.]23[.]193:59317/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4146,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4146,
                "newInLastHour": 4039,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hhqzk[.]stevestowingsatx[.]com\"",
                " \"stevestowingsatx[.]com\"",
                " \"ivox[.]polarstartire[.]com\"",
                " \"cbtlecmkc[.]nextbahis[.]one\"",
                " \"151[.]243[.]137[.]78:81\""
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
            "iocCount": 10230,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10230,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a",
                "9000e46cabc64219fb1447d59d5443afcb412e36",
                "632061b26a93455e9c4f0ac413deae710c920216",
                "991bf55fc47c006b3eedf6b348296f9f7aba20eb",
                "9c124d9fc4b10c04767b554f02b92d6591175e8a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52763,
            "activeSources": 8,
            "criticalAlerts": 31627,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21411,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10216,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3578,
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
                "count": 20481,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]26[.]226[.]163:59859/i",
                    "hxxps://curl-shell-teal[.]vercel[.]app/task/parser/windows?token=rkCiMn9",
                    "hxxp://110[.]39[.]226[.]242:36140/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]90[.]31",
                    "1[.]183[.]161[.]88"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1668,
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
                "count": 1464,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]99[.]102[.]231:8020\"",
                    " \"47[.]99[.]102[.]231:22\"",
                    " \"47[.]99[.]102[.]231:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1431,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447"
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 651,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9000e46cabc64219fb1447d59d5443afcb412e36",
                    "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "572029fec2909ba613cee3c3698b8a49af83b428"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45827,
        "lastCalculated": "2026-07-21 23:09 IST"
    }
};
