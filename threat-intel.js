// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-30T16:47:34.810385+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-30T16:47:34.408129+05:30",
    "lastUpdatedFormatted": "Jun 30, 2026 at 04:47 PM IST",
    "comparisonPeriod": "Jun 29 \u2013 Jun 30, 2026",
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
                "hxxp://xbt8x82irz1kbcyq[.]hgsa226[.]com/",
                "hxxps://ws[.]page-instant-whatsapp[.]com[.]cn/",
                "hxxps://allegro-powiadomienia[.]shop/",
                "hxxp://nachocebu[.]hostel[.]town/",
                "hxxp://glovent[.]vu/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 833,
                "newInLastHour": 182,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6b49e132d934f2770a6ba5435810a4b43f58569c162a7998df0943811ed3857e",
                " \"8f4e8fb792d10f218cfd65b1c7f555132da61eed10868182ac7bf624e40a9fea",
                " \"b342775e37ea0ee5526f4847a15ee8df032145089aa92dc5e145f11d4cadec14",
                " \"65668f7a2703ec132bfc0e5f3ea577b024478e24e2b9acfb3cdec64731bf2b14",
                " \"31642b73f628baae10977e0a5a44ea567590cacb674cab153787ea4ff2ae5bb2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
                "newInLastHour": 27,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]176[.]118[.]246",
                "1[.]188[.]100[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9015,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9015,
                "newInLastHour": 9015,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]223[.]79",
                "1[.]14[.]107[.]204",
                "1[.]14[.]151[.]196",
                "1[.]14[.]203[.]20"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22117,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22117,
                "newInLastHour": 22117,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://bip[.]priestsw[.]com/fee/optimized_MSI23[.]png",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_aa85f097aed60931[.]exe",
                "hxxps://pub-3bc1de741f8149f49bdbafa703067f24[.]r2[.]dev/tnnbbv[.]png",
                "hxxp://icy-lab-0431[.]guilherme-telecomunicacoes2024[.]workers[.]dev/fowap",
                "hxxps://icy-lab-0431[.]guilherme-telecomunicacoes2024[.]workers[.]dev/sWbui"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4597,
                "newInLastHour": 3888,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"6oekxs4k[.]vip1xbet[.]net\"",
                " \"152[.]32[.]132[.]177:443\"",
                " \"hxxp://153[.]117[.]41[.]127:47793/Mozi[.]a\"",
                " \"hxxp://110[.]37[.]35[.]79:33903/Mozi[.]m\"",
                " \"hxxps://backupper[.]pro\""
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
            "iocCount": 10082,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10082,
                "newInLastHour": 77,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "078541bcc8ca1f620034dc2b29cbd968faf02ea6",
                "85725890743b16375132651911e3f692115128a8",
                "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54058,
            "activeSources": 8,
            "criticalAlerts": 32595,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22612,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9983,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3582,
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
                "count": 21871,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]5[.]134[.]91:52524/bin[.]sh",
                    "hxxp://110[.]39[.]232[.]231:50027/bin[.]sh",
                    "hxxp://42[.]232[.]236[.]149:53847/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]176[.]118[.]246",
                    "1[.]188[.]100[.]231",
                    "1[.]188[.]23[.]20"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1659,
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
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1407,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"150[.]109[.]186[.]36:64401\"",
                    " \"172[.]245[.]226[.]124:443\"",
                    " \"172[.]245[.]226[.]124:80\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 888,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46imdg6k[.]blackjackonlineplay83[.]com\"",
                    " \"328bpzpg[.]313betapk[.]com\"",
                    " \"uhv95fx8[.]betbuf[.]live\""
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
                "count": 684,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 602,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "85725890743b16375132651911e3f692115128a8",
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 50611,
        "lastCalculated": "2026-06-30 16:47 IST"
    }
};
