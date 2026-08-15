// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-15T10:10:38.169141+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-15T10:10:37.902623+05:30",
    "lastUpdatedFormatted": "Aug 15, 2026 at 10:10 AM IST",
    "comparisonPeriod": "Aug 14 \u2013 Aug 15, 2026",
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
                "hxxps://firstezkpg[.]run/riowC",
                "hxxp://layanan-pemenang33[.]blogspot[.]com/",
                "hxxps://americasdspkits[.]com/rewards_login",
                "hxxp://www[.]j110q[.]vip/",
                "hxxps://transcript[.]emurgopolicyreview[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1026,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3e22b966c6bb3644f5060041c93c0ddd7d321fa33c9bfc59c5dbc20b6d20c937",
                " \"02e15079a83aa6d061230a32312fe886303f82730158af3f70f46b4a5a0200fd",
                " \"43ed61242830c3c0023fff8dc1f29d49786a2148ff5978202baa2f45b023aadc",
                " \"6ca51deb014b8b313336ff09d44e9b308e55e1c4e8a08d315096250dea0ad853",
                " \"ba48ece9b2956fa3ae96b49b7ffed13ef42e0a51475aa78813e2a55640203560"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 49,
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
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]178[.]120[.]147",
                "1[.]192[.]177[.]51"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4703,
                "newInLastHour": 4703,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]178[.]214[.]92",
                "1[.]20[.]150[.]200",
                "1[.]203[.]174[.]102",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16821,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16821,
                "newInLastHour": 16821,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]68[.]65:46979/bin[.]sh",
                "hxxp://115[.]63[.]203[.]149:37425/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_f50d0ed2eef01870[.]exe",
                "hxxp://123[.]129[.]133[.]165:47739/i",
                "hxxp://222[.]142[.]252[.]78:52922/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5430,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5430,
                "newInLastHour": 5122,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://blaze-x[.]com/\"",
                " \"v22eqt8a[.]drubenginecologo[.]com\"",
                " \"milpl8xr[.]eng-neuroxen[.]com\"",
                " \"bodenindexpunkte[.]ch\"",
                " \"hxxp://vexdico[.]shop:8539/categories\""
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
            "iocCount": 10434,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10434,
                "newInLastHour": 8590,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd",
                "46a2a90c5813eda22263c058742902faf1def5a6",
                "183d02c077142b8701d1a719cc8cee3f8fb76072"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 42089,
            "activeSources": 8,
            "criticalAlerts": 19714,
            "activeCampaigns": 165
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17859,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4005,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1855,
                "trend": "down",
                "percentage": -82
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
                "count": 16805,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]96[.]139[.]213:39951/i",
                    "hxxp://138[.]255[.]178[.]214:43405/bin[.]sh",
                    "hxxp://110[.]36[.]31[.]205:34885/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1634,
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
                "count": 1326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]84[.]15[.]240:8080\"",
                    " \"47[.]84[.]15[.]240:80\"",
                    " \"47[.]84[.]15[.]240:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 568,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"albexmoving[.]se\"",
                    " \"beatricemoren[.]se\"",
                    " \"zalgoedutech[.]com\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 537,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gru[.]sm188dadu[.]top\"",
                    " \"gru[.]10001slot[.]org\"",
                    " \"hxxps://89[.]167[.]3[.]143\""
                ]
            },
            {
                "name": "Vidar",
                "count": 501,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248",
                    "d0944e5765a9b5767d3cf02e3bdd9f466c5391b7",
                    "4ee6cf96fce286a8e41faa52626ccf484c72a772"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4fg0jkkv[.]greaternewzionbc[.]org\"",
                    " \"dc6z7ywb[.]en-us-energyrevolution[.]com\"",
                    " \"unfourtel[.]es\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"23[.]175[.]48[.]7:8808\"",
                    " \"178[.]16[.]52[.]136:3009\"",
                    " \"128[.]90[.]63[.]117:4444\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 353,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]143[.]231[.]61:443\"",
                    " \"45[.]157[.]233[.]139:7000\"",
                    " \"2[.]59[.]133[.]115:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50612,
        "lastCalculated": "2026-08-15 10:10 IST"
    }
};
