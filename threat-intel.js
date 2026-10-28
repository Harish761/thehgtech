// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-28T10:57:10.423117+05:30 IST (2026-10-28 05:27 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-28T10:57:09.477351+05:30",
    "lastUpdatedFormatted": "Oct 28, 2026 at 10:57 AM IST",
    "lastUpdatedUtc": "2026-10-28 05:27 UTC",
    "comparisonPeriod": "Oct 27 \u2013 Oct 28, 2026",
    "stats": {
        "totalIOCs": 109298,
        "byType": {
            "url": 40122,
            "ip": 53585,
            "hash": 997,
            "domain": 2248,
            "ssl-cert": 10645,
            "ip-range": 1701
        },
        "byVendor": {
            "OpenPhish": 3932,
            "Malware Bazaar": 711,
            "Spamhaus DROP": 1701,
            "CINS Army": 39897,
            "Blocklist.de": 11039,
            "URLhaus": 34822,
            "ThreatFox": 6546,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10645
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1768,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1620,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1187,
                "types": [
                    "domain",
                    "hash",
                    "ip"
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
                "name": "IClickFix",
                "count": 709,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 702,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 503,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 493,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 441,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 409,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "DCRat",
                "count": 346,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Quakbot",
                "count": 292,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-28T04:00:42.304959+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-28T04:00:42.304959+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-28T04:00:42.304959+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-28T04:00:42.304959+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-28T04:00:42.304959+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]72[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]55[.]80",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]149[.]30",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]192[.]95",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]144[.]106[.]82",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]106[.]134",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]162[.]208[.]86",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]234[.]80[.]94",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]80[.]222[.]153",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]94[.]166[.]51",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]95[.]202[.]100",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-28 04:00 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-28 04:00 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-28T04:00:38.307430+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-28T10:57:09.477351+05:30",
        "lastUpdatedFormatted": "Oct 28, 2026 at 10:57 AM IST",
        "lastUpdatedUtc": "2026-10-28 05:27 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3632,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-28 05:26 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://2017-facebook[.]blogspot[.]com/",
                "hxxps://www[.]2017-facebook[.]blogspot[.]com/",
                "hxxp://microfis-password-recovery[.]wasmer[.]app/",
                "hxxps://account-security-notification[.]at-us[.]therelayservice[.]com/matpwp/#/main?type=LiveEmail&locale=en&token=GcRCorP2TGBfKv2HKw6ye5hKk-AeOhN5hv1a5vOAVJAltw8RwAu1LH_C8hfzhdDAr7PNqAb3gq1ZelCsdwLW_K65BmXwJZqKm3rnThroG684Z1Y0lSA2su8EQuoknGhQMRctAGRpTLi3jGt7aHzwv9fI84P7twmWwX_9g0k1ZkQUqLp-wmQX4DWHiUwK-2eu9NxCMnZAr08qeaTgvkGLGL09prt_sWL_OWh414PkKaYoEIVqWprPCXGCJfhkWF_x3mDRhqCvtcovxqrR0qj87M9D5ccJNFia0Pf7dnRpPDPD0zdB1x7U_3I9ZOZ9_CpF6WpGT8c_DWHAyRJf1mWT56C0kV_xsC8Bdvz7XWPuJI18z_CErG_mrqt4lUsssys8uBh5r8Zz4O_qL62uYTFmorsuJLb1Fph5Q3p0rIxGDvWJppoEg97pJpqk0_slipkNERwtjljswqECcl68-jYP2DFVj8iiubIwQA_ncOvj5OW2IJCWPQ76HHVeGBDMo41e0BbPdrAf6a7Zyh-bBGjJgWsx3s3KS-NKLcVkk8jCmprFgfC4OQHQYWxPyDWObV3xWXd03TKwX2LuCFWBL95ATvX6FXOHYvvLAfSDAhuwI-QZIVZvAyn3qq_gnKkvLJuEeSuiV-JLo67YjCx_g7OTVi4RHBLC_sentRtQulZ7CjCLennMi8g6svaWrSaxnO9t2fdjs3zolqUDYoJ_5-Wauwdfzuapy_xM5fqKYd86YeWO8F5wzaR_Wjpu4ScwX9xLiYnNSp3SCKGskGX3ZHRHkLaakd7rb2WlN4-3-noeUCs",
                "hxxp://g4gx8[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 476,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-28 05:26 UTC"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                "02414b05a19c9ff826c3cfca15849c0a32a26dd5593ce6165f01e883a6fc6ae2",
                "f3e50b8e9f28213c52ad0001a3fd251075bc79583d80d433b4e47d95a238bebd",
                "d73112757c5e01bf2fb84dfb69f5d51bba8e63e72d4eb862266665a93a76be0a",
                "4504dca6f7874b8c561ec4af241fcce472cf760e9b66cafe2aa09fe09116a28c",
                "1c1e6ff2befc51e413c37961e0cfc2e4bca62043560964e9df56abd477568b77"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1758,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1758,
                "newInLastHour": 58,
                "lastUpdate": "2026-10-28 05:26 UTC"
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
            "iocCount": 37931,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 37931,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-28 05:27 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]214[.]29[.]155",
                "1[.]215[.]138[.]43",
                "1[.]236[.]254[.]202",
                "1[.]24[.]16[.]121",
                "1[.]24[.]16[.]191"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10888,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10888,
                "newInLastHour": 5316,
                "lastUpdate": "2026-10-28 05:27 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]149[.]30",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]144[.]106[.]82"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34528,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-28 05:27 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gajaa-Azhura/MERN-application/refs/heads/master/src/assets/application_MER_2[.]1[.]zip",
                "hxxps://raw[.]githubusercontent[.]com/Gourdja/sonic-skills/refs/heads/main/skills/audio-numerics-review/skills-sonic-v3[.]4[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6027,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-28 05:27 UTC"
            },
            "types": [
                "url",
                "domain",
                "hash",
                "ip"
            ],
            "sampleIndicators": [
                "b4ec1ea1528a1cf690b1067a214751cfee1ef0eca037c7989b4bef17fbf6b53b",
                "89[.]32[.]41[.]109",
                "89[.]32[.]41[.]111",
                "89[.]32[.]41[.]117",
                "202cd87d43a3908174e7b219c61ad3728cc6d46469a54f86861470c19677a6da"
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
                "lastUpdate": "2026-10-28 05:27 UTC"
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
            "iocCount": 11059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11059,
                "newInLastHour": 432,
                "lastUpdate": "2026-10-28 05:27 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b3419f377a0765d386af3f3a61bede653db873f7",
                "891b265025da1fe909b4792dfe0f3df462694bef",
                "d8d068667512bafa6720747c23266764f70638a9",
                "f7c6d6e9767952571df5b177956e71f6e664711d",
                "9c1e389a6cea4a7eb32b2e1d89acedfd5b7a52f9"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-28T04:00:42.304959+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-28T04:00:42.304959+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-28T04:00:42.304959+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-28T04:00:42.304959+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-28T04:00:42.304959+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]149[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]192[.]95",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]144[.]106[.]82",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]208[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]80[.]222[.]153",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]166[.]51",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]202[.]100",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]59[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]58[.]116[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]133[.]59",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]42[.]99",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]49[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]245[.]96[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]243[.]118",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]208[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]186",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]240",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]110[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]101",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]92",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]236",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]117[.]107",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]102",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]118[.]49",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]126[.]239",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]11",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]127[.]151",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]156[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]37[.]32[.]75",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]15[.]132",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]124[.]25",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]143[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]175[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]46[.]66[.]84",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]133[.]255",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]158[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]75[.]224[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]167[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]88",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-28 04:00 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-28 04:00 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-28T04:00:38.307430+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 109298,
            "activeSources": 9,
            "criticalAlerts": 46898,
            "activeCampaigns": 221
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36008,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10890,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4610,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 3935,
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
                "name": "CINS Threat List",
                "count": 39897,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]89[.]105",
                    "1[.]193[.]57[.]144"
                ]
            },
            {
                "name": "malware_download",
                "count": 34822,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://raw[.]githubusercontent[.]com/rcrishabh/Loud-No-More/refs/heads/master/endotys/No-More-Loud-v1[.]0[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Shishir-Singh-666/nodepay2nd/refs/heads/main/src/nd_nodepay_v1[.]9[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/Kurvaan/ptx-tutorial-by-aislop/refs/heads/main/sections/by_ptx_tutorial_aislop_3[.]2[.]zip"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 11039,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://make-troll-318071[.]framer[.]app/",
                    "hxxp://avdveulfdasxf[.]square[.]site/",
                    "hxxp://himorhis[.]square[.]site/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1768,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1701,
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
                "count": 1620,
                "types": [
                    "ssl-cert",
                    "domain",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "195fec1204186bb02fde9ac09f5a45add84dde09533400a354a2d97fd6b20acd",
                    "5ae300101bef874b2d8e9dc927571074d7cd6c706903f4a23d91bf0c2943e256",
                    "46[.]246[.]4[.]16"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1187,
                "types": [
                    "domain",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "4d12d57d6db212de40d9b28811b1e19b",
                    "cdn[.]img[.]5a09f6f2[.]PNAlumni[.]dgitd[.]anchorbolnorth[.]com",
                    "82[.]158[.]89[.]27"
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
                "name": "IClickFix",
                "count": 709,
                "types": [
                    "url",
                    "domain"
                ],
                "sampleIndicators": [
                    "kaizentekacademy[.]com",
                    "locandaskansen[.]it",
                    "polymathconsultant[.]com"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "OffLoader",
        "totalAttacksThisHour": 21111,
        "lastCalculated": "2026-10-28 10:57 IST"
    }
};
