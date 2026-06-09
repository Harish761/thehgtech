// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-09T23:49:01.291768+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-09T23:49:00.977714+05:30",
    "lastUpdatedFormatted": "Jun 09, 2026 at 11:49 PM IST",
    "comparisonPeriod": "Jun 08 \u2013 Jun 09, 2026",
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
                "hxxp://3659b[.]win/lottery[.]html",
                "hxxps://www[.]5mp[.]eu/fajlok2/loggss/index_www[.]5mp[.]eu_[.]html",
                "hxxps://ecoviasemfila[.]guiasindividuais[.]online/ecovias/?xp&#61",
                "hxxp://www[.]89240[.]xyz/",
                "hxxps://www[.]stainedconcretefloorsbymichael[.]com/44dewp/bkd/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1292,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1292,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e2e5f2dff7f4b9c5b8535e82af54abc58d5eb762d56250d93c9501f23ba152e4",
                " \"e4e8c40f00dac9520f1c773359c7d5d51f07282e7b3500bef466697b80c38212",
                " \"93f370cec57e6e48a9cb31254edba190232077f9b3d197f5a67d003ebb08d336",
                " \"3cea9df086d111a71c24822aa626380105347dd6d458ae7971557684bf12e097",
                " \"1efeb45e798ee5a11636079c97935f4a7bd4367f7576109c7a11c907cf4a7904"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1660,
                "newInLastHour": 23,
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
                "1[.]0[.]203[.]197",
                "1[.]10[.]185[.]224",
                "1[.]12[.]229[.]231",
                "1[.]141[.]131[.]155",
                "1[.]141[.]149[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5013,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5013,
                "newInLastHour": 5013,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]12[.]51[.]198",
                "1[.]192[.]61[.]19",
                "1[.]2[.]252[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18402,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18402,
                "newInLastHour": 18402,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]88[.]109:58208/i",
                "hxxp://183[.]158[.]170[.]177:46989/i",
                "hxxp://spasopro[.]at/Lsge63sd3/Plugins/clip64[.]dll",
                "hxxp://spasopro[.]at/Lsge63sd3/Plugins/clip[.]dll",
                "hxxp://spasopro[.]at/Lsge63sd3/okey[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4215,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4215,
                "newInLastHour": 4209,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pssoduvnzud[.]xyz\"",
                " \"dsfamsi4b[.]cn\"",
                " \"asfjjasguasus[.]xyz\"",
                " \"hxxp://196[.]251[.]107[.]104/geter/index[.]php\"",
                " \"lrucuzu[.]rika90[.]bet\""
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
            "iocCount": 9887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9887,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dc4932b1ea50ef699fed8fa52e2a1d6b75987878",
                "11af63139ec0f70cc1136a44aa45fe1c2b481955",
                "b6489631abc0396854c92e63917b4bbd2e2b3168",
                "86ee48a5c44b140149fba77b22b93900cf3e883b",
                "94672f2ecc719189d50fbaca2f1597f783470188"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50684,
            "activeSources": 8,
            "criticalAlerts": 29507,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19648,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9859,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3365,
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18339,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]148[.]159[.]67:52087/bin[.]sh",
                    "hxxp://61[.]52[.]43[.]223:43395/i",
                    "hxxps://disxya[.]jamjahani[.]football/30743d71-2368-4d04-b271-c8075873675c"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]119[.]194[.]226",
                    "1[.]141[.]131[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1637,
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
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1375,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]159[.]27[.]165:8080\"",
                    " \"117[.]159[.]27[.]165:80\"",
                    " \"117[.]159[.]27[.]165:9090\""
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 580,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "496d191aedf6be136391a1828962864b479bfec7",
                    "cc060f5f00fde826f5252c47765f1f0a74e8cb1b",
                    "5556255c430a2dff1a61bf266d7c3eaeedd885ab"
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
                "name": "OffLoader",
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43026,
        "lastCalculated": "2026-06-09 23:49 IST"
    }
};
