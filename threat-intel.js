// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-20T10:09:16.827244+05:30 IST (2026-10-20 04:39 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-20T10:09:16.044353+05:30",
    "lastUpdatedFormatted": "Oct 20, 2026 at 10:09 AM IST",
    "lastUpdatedUtc": "2026-10-20 04:39 UTC",
    "comparisonPeriod": "Oct 19 \u2013 Oct 20, 2026",
    "stats": {
        "totalIOCs": 97722,
        "byType": {
            "url": 43620,
            "ip": 35173,
            "hash": 4040,
            "domain": 2200,
            "ssl-cert": 10997,
            "ip-range": 1692
        },
        "byVendor": {
            "OpenPhish": 765,
            "Malware Bazaar": 2634,
            "Spamhaus DROP": 1692,
            "CINS Army": 25664,
            "Blocklist.de": 6689,
            "URLhaus": 34089,
            "ThreatFox": 15187,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10997
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1798,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1646,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 1280,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "win.cobalt_strike",
                "count": 1265,
                "types": [
                    "url"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
                "types": [
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 733,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "elf.mirai",
                "count": 703,
                "types": [
                    "url"
                ]
            },
            {
                "name": "win.pure_rat",
                "count": 650,
                "types": [
                    "url"
                ]
            },
            {
                "name": "IClickFix",
                "count": 628,
                "types": [
                    "domain"
                ]
            },
            {
                "name": "win.vidar",
                "count": 596,
                "types": [
                    "url"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 562,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 549,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 511,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 455,
                "types": [
                    "hash",
                    "ip",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "629700c6fb58a48ce5c34e9e830225fad3e62634",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-12 07:35:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6ae4974b641caa8b6aae8d3392e7fb4f8c7e3577",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-12 07:35:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "245f189a60a8b20a5dc562134b3d55d6539ac186",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-12 06:13:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ab1d61a4f4692b105daa345a7185119f0d29cb79",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-12 06:13:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-20 09:46:58",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-20 08:21:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "372b91c0d31a75b4e1765af998d984881e34dab1",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-20 06:37:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-20 06:34:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-20 06:31:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cc50b31d95b1d87ac2b597a84544d9368780978a",
                "description": "Malicious SSL certificate - OrcusRAT C&C",
                "timestamp": "2026-09-20 06:31:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "OrcusRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ca488616709ba9b2d92517094a073d4b6c6849f1",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-20 06:30:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-20 06:30:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "15a05c644b5ec4ed5c0ba785992c3a4410fbef2a",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-20 06:29:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "efdc9593038f9c5962ec9529b7dd02ce4b40f6c9",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-20 06:29:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3a91a4aef42d019cf22e2f7a7ee737cff41012cf",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-20 06:29:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7704ef9bd99fb57c8f194fdf7fdc950d4bcd26af",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-09-20 06:28:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-08-22 11:04:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "19cf66baa4727b080e283d10284993170c9b462b",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-22 11:00:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
                "description": "Malicious SSL certificate - Malware distribution",
                "timestamp": "2026-08-22 10:32:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "01162aa2c2be7f9d16f646b94a1245726c68b110",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-08-22 10:29:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-20 04:04 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-20T04:04:13.814993+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-20T10:09:16.044353+05:30",
        "lastUpdatedFormatted": "Oct 20, 2026 at 10:09 AM IST",
        "lastUpdatedUtc": "2026-10-20 04:39 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 991,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 991,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://faq-start-ledgercom-eng[.]typedream[.]app/",
                "hxxp://hotelhautbuyeg[.]click/",
                "hxxps://f005[.]backblazeb2[.]com/file/using1sg/mtsprofilesg[.]html",
                "hxxps://www[.]amazonklantenservicenederland[.]com/",
                "hxxp://shrabana-56[.]github[.]io/shrabana-project"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2817,
                "newInLastHour": 183,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "2efd63cc32630d6a630dac0ca70afd9ff65a87826153678b0c89841a88308fc5",
                "92f859eb329b97f289bd7b864f27559bb8a70a56fd165bbc5bf27751b62ff94a",
                "7ed1a706699920206b95e93f869602d8b546f278f7e7e528f42dede04b42ce75",
                "9208a826c900f6a2677b2943b28c6f7016e06bfcc605e2c054a4a124ac027666",
                "f5da783380784216a5979a7ac7285792a4ca2e04a4a7c3bd921ef9a7f5eaa3a0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1613,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1613,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-20 04:39 UTC"
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
            "iocCount": 26555,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 26555,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]193[.]63[.]62",
                "1[.]215[.]138[.]43",
                "1[.]24[.]16[.]107",
                "1[.]24[.]16[.]131"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6955,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6955,
                "newInLastHour": 5256,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]36[.]175",
                "1[.]12[.]55[.]80",
                "1[.]12[.]70[.]212",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34156,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34156,
                "newInLastHour": 33350,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]178[.]168[.]184:38532/i",
                "hxxp://36[.]88[.]136[.]194:40019/i",
                "hxxp://42[.]239[.]170[.]207:51690/i",
                "hxxp://42[.]239[.]170[.]207:51690/bin[.]sh",
                "hxxp://42[.]233[.]165[.]218:40107/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15417,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 15417,
                "newInLastHour": 5002,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "url",
                "hash",
                "ip",
                "domain"
            ],
            "sampleIndicators": [
                "206[.]123[.]152[.]197",
                "75e4994373a51dbfe5f22f0f071c05dbedd077d80aa6a0051374121780868707",
                "hxxps://htj[.]abanda88[.]org/pe/",
                "9e40c2c027e3bbbe89e9e4ddc1846ef271fc8d4c6c09282be4f7164cd96ca196",
                "23[.]132[.]164[.]193"
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
                "lastUpdate": "2026-10-20 04:39 UTC"
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
            "iocCount": 10861,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10861,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-20 04:39 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38151a6b2438b2b645a27a891e1e15786f11a783",
                "eaefd82da94ee8839666b2a42d24dcc412d7de3c",
                "e2234aa66c80b118b69211f6e8f4efbd578a7587",
                "e2dbc11a546d739d12e547c38cdb4fd6cfacd4c4",
                "b97f1ae860fce04e1aae480e10b884da9826b17b"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "629700c6fb58a48ce5c34e9e830225fad3e62634",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-12 07:35:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ae4974b641caa8b6aae8d3392e7fb4f8c7e3577",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-12 07:35:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "245f189a60a8b20a5dc562134b3d55d6539ac186",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 06:13:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab1d61a4f4692b105daa345a7185119f0d29cb79",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 06:13:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-20 09:46:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-20 08:21:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "372b91c0d31a75b4e1765af998d984881e34dab1",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-20 06:37:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:34:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:31:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc50b31d95b1d87ac2b597a84544d9368780978a",
            "description": "Malicious SSL certificate - OrcusRAT C&C",
            "timestamp": "2026-09-20 06:31:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OrcusRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca488616709ba9b2d92517094a073d4b6c6849f1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-20 06:30:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:30:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "15a05c644b5ec4ed5c0ba785992c3a4410fbef2a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "efdc9593038f9c5962ec9529b7dd02ce4b40f6c9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a91a4aef42d019cf22e2f7a7ee737cff41012cf",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7704ef9bd99fb57c8f194fdf7fdc950d4bcd26af",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-09-20 06:28:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c0a9291be46e42b67835dff9e6c767fd6660287",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-22 11:04:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19cf66baa4727b080e283d10284993170c9b462b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-22 11:00:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-08-22 10:32:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01162aa2c2be7f9d16f646b94a1245726c68b110",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-22 10:29:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8bdc29b8e9cdd5a849185ca6042d9c6f90d12e7",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-22 10:25:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d8f084ddf2729d1f4747f2a428dd8d9b13e1cfa",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-22 10:22:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adfc8dd0c5e99a8e33b1df7d5c10fc9653342491",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-22 10:20:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0c587f31dc58c33ef2e3632bb161f4d52231b7c1",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-22 10:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-17 13:34:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-17 10:53:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3fb1dbcabe3bab0eb06fefe295821bff1007fb25",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-17 10:53:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-17 10:52:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f9a55e7a59b0fcbd7df9f5a445475480368598ce",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-17 10:52:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c31650da58712771ad83fd5c6cef97905a255cc5",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-17 10:52:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "573ff46149f8feb36cd0dbf80427b88aa156ed7b",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-17 06:43:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-25 19:05:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "070ad9d359151a2de5af7cd41295758bf1f4227a",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-18 13:20:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-18 13:17:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a23f624eee7847ff3939994ff8922ba8eb645e26",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-18 13:16:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "61102ef78d52d044b8ded80e2ad0471c68e6f962",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-18 13:15:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-06-18 13:15:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a4d0044eed173808eb2c6b86c70d1121318adf0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-18 13:15:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bdc28b1562f5fafe51224d11d54f1196bfa884e",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-18 12:36:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e5e7e69a3b202c3bcbe3ad00778738ac17b337a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-27 08:39:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f2238bc817a0980aad4917bfe0d50f2b722a917",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-27 08:13:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d97825d45bfc538a5d364592bedc811585f20599",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-27 08:10:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 14:07:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c56ac80a032ff319463850125369cc514e83ed59",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 13:39:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cce12866188dc393f3c4e151caf38e32543a9c65",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 13:38:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-05 13:38:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-05 13:38:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9833a3a7e27800d994a2924baf7a664dfff96e8c",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-05 13:37:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "06e08670cd781e40cee3c93163c7d29ea73d4acb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-05 13:34:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a08099ae4318bfc81af69fd382081262cc4e9487",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-05 13:34:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77a62d508af0ee7022457ef5c65fd44db69a008e",
            "description": "Malicious SSL certificate - NetSupport C&C",
            "timestamp": "2026-04-14 06:04:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "NetSupport",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14728567db9ecd6e5f46c9e884f99d29c70788e2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-14 06:04:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3f47e7722a1bf5a9228b96c634ad54cf66fbbe18",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 06:04:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-04-14 06:04:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e8d2629ca6f5b6750c69e687fa4c08e5a53616d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:02:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-04-14 06:02:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c04424fca43ca40617cd9176b41d17db89903c8",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:01:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b156fe2530903bc8e21ee5d719c63a917619490",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 05:58:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7e8d4159dfd1d4de048b6751d0e125ca7721d63",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 17:29:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e979e3166f481b4ed06d057f555ca41fc47de33e",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a5d44ecbf4ac6ace7339e80b02052aa12f5001b",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "df2ff49d860e2451ff42c0206afee446364b52f0",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8b6050f589d432c56f05de438e4ec606926c97df",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 17:28:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a34f580e3626ac9de04604b8d0a4c3abb8682aa",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-30 07:27:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "426f482e33309401ce4ecf7958f5ae28e8ff1423",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 06:54:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 06:54:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1305a89f7c83c0204edeae7bb063f73c4a80612",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:47:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:47:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f978cf56a838e9821b699784c9650a0baacdb528",
            "description": "Malicious SSL certificate - njrat C&C",
            "timestamp": "2026-03-30 06:46:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "njrat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "80bcab6a0fbe3162130168bd93efc26fd3ec6490",
            "description": "Malicious SSL certificate - njrat C&C",
            "timestamp": "2026-03-30 06:46:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "njrat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f2fec8875975bbc52993dea783327c6096c9b285",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:45:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fb81998ac697ab9e998f1c69d89e7ea606850ed",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:45:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0602e06d475378201ce6813d28db192d0ba16eb0",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-03-30 06:45:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "33510aca342fd05d8d74aa957e95477aeb2e7ed7",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:44:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5974d97ad02dbc6f3e491da71af7ca1fb8459d42",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-30 06:44:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a9aca4a6fba1458f60de6080031427689654cfe",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-30 06:44:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "20d6dac19c714dd2102038eb700f10283940d822",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:42:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-23 15:09:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7da0a76b514869395da864dff3444a294c5bc73b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-03-23 09:03:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd9055d19cf441e17d7a0f8d4f3cd8a78712993d",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-23 09:00:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "30f1bac7bb98fdf0215cdf023bac1112f5d35f99",
            "description": "Malicious SSL certificate - Arechclient2 C&C",
            "timestamp": "2026-03-23 07:37:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Arechclient2",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "055a435dbca9b6c9f14de1735be3c2f4b3b84274",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:35:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "855df27eb0c93652f8fc54190698c15bcb86373d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:34:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "82421e4efd6b2091710c28a342954061228f8512",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:31:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5854bcdd3f88acbf00bf32990f0ef0cbb3905a57",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:30:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f2ea97e92648473ca2a6d2f1607e1e36ac55346",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-23 07:30:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "798cdfed3b45cec0654b935770881f40163a2a83",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:29:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "efbe0dd6d523076ea471430038a5c7b402596adf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:29:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32de1e4607fee3ba5523ed8c10b97949b3fe381d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:26:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "042d6ef11b394a9c9d4193b2929aade616528c7c",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:18:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "46ad99383c2807272b1a31658af546be2a7a9141",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:18:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c19ff8df9e94c2e7f4e869bc9134ed081c41642",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-23 07:17:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3e4614125303e6355272778011797b3f758c4992",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:13:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-03-23 07:09:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51f20540cd77caa36702bb359c8c06949aecea02",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-03-23 07:08:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-23 07:06:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8d8f1297e6c21a5707c2f5b09752c45054335ac",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-23 07:06:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1a64f31a0cdb3f939ba1e0144b0978e847cef2fc",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-16 07:00:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1906000bcbc6369f6361efa108bb803414e8e130",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-03-08 19:31:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "472eb1f7d78f14512fb0fe4c9f1c62ae4b25d024",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-03-08 19:23:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-20 04:04 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-20T04:04:13.814993+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 97722,
            "activeSources": 9,
            "criticalAlerts": 49721,
            "activeCampaigns": 382
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 38475,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11246,
                "trend": "up",
                "percentage": 325
            },
            {
                "category": "Botnet",
                "count": 9199,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 767,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 34089,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]44[.]146[.]42:38129/i",
                    "hxxp://61[.]53[.]82[.]240:56561/bin[.]sh",
                    "hxxp://117[.]223[.]140[.]202:46714/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 25664,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]61[.]172",
                    "1[.]117[.]68[.]141",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 6689,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]36[.]175",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Vidar",
                "count": 1798,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "379a2944024fe73ff4af0d02eeb4764918f3009aa236207e0edd616cbfb84ccc",
                    "0d8f1752831cd45fbf6e4786cfd7e36997ab9835efdcfb7950b1db52e59f63f2",
                    "7ed66e30a6b0c5eb8b7598c10edf420e04ed2ce1fbea8f875418f3f68d625691"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "count": 1646,
                "types": [
                    "ssl-cert",
                    "url",
                    "ip",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "fc255863ceab40f2510ddf29801e583015505861777f1c5d7e72ec164920f075",
                    "ca647b807e361ae45b779254dc17251364552d77ab354c90fdd73803ac5bca80",
                    "9c1a7c0df8bfa2e8a3c461d469545b47749a5f2de3289c9568698158d20ea8d1"
                ]
            },
            {
                "name": "Mirai",
                "count": 1280,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "527ef3616e707990c2f8a84b6a7ff67b3cdf7ae7e9c913638cc260b6c106ff92",
                    "a6a8f49be35200b6d8121dac963fd319bbf334c765b20a177f66ae118a77e975",
                    "51161a2707321f802bab95d3cf1b2bf865aa66e0e514282e692b71478524aaee"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1265,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"140[.]143[.]193[.]143:443\"",
                    " \"118[.]26[.]111[.]141:80\"",
                    " \"118[.]26[.]111[.]141:8080\""
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1203,
                "types": [
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "103[.]236[.]84[.]103",
                    "cdn[.]img[.]76e1e5fa[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "upi[.]log[.]30ca777733df8aa6e4404bd8beadb65c36105e9346e15819152e9ecc4[.]fd746f6f221867dd6d504e00569cc108bbf5c5e0daf7628d26285775[.]86174a0a1dc3dd1625fc62e486572c26425c95ffef342f6dddb5ffe0[.]1b1f3f2edc[.]7605f6[.]pnalumni[.]dgitd[.]anchorbolnorth[.]com"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 764,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://xunqelo-mpt-favzari-h4d8me63[.]pages[.]dev/",
                    "hxxp://sp23ct-ravem-biz-zulok-pelun[.]pages[.]dev/",
                    "hxxp://zunqari-mpt-xavfelo-h6d4pe82[.]pages[.]dev/"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 59096,
        "lastCalculated": "2026-10-20 10:09 IST"
    }
};
