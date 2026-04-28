// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-28T23:24:32.084343+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-28T23:24:31.724306+05:30",
    "lastUpdatedFormatted": "Apr 28, 2026 at 11:24 PM IST",
    "comparisonPeriod": "Apr 27 \u2013 Apr 28, 2026",
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
                "hxxps://lhhrl-rhwh-z2ja[.]rob-c2d[.]workers[.]dev/lp/NSp-XOOmSKE/",
                "hxxp://popstesco[.]wasmer[.]app/fibergrid",
                "hxxp://netcoinlogi-section[.]webflow[.]io/",
                "hxxps://kleinanzeigen[.]kaufmarkt0[.]website/order/vY7dDbcpTS7x/?plg=polya_mail",
                "hxxps://1015gamelogin[.]org/498dm9xu"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1058,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1058,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1fe3a0ff5d48f0e4f3c85d202e10768e766c6961e66c0fb6c31aa466adc38fcb",
                " \"0439d9a526e635920fb4f1c6de4949fad87d1efccbd3ce05e373e0a0e65a0fcf",
                " \"c9984870e1caada45b1ea9dc1f9829bfd342f4adbbc586398e443d765e28371a",
                " \"386f3560257e3f1f2cec7f3bbbfa0c47312ba78f0b78d18999bce976a45e7df6",
                " \"6be1ef4e277daf12f2390d53d35de79ca87c2869163e1a9bdea2208daea2b942"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1599,
                "newInLastHour": 43,
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
                "1[.]169[.]39[.]171",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158",
                "1[.]188[.]102[.]82",
                "1[.]193[.]63[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3978,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3978,
                "newInLastHour": 3978,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]227[.]58",
                "1[.]2[.]213[.]105",
                "1[.]2[.]214[.]104",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26560,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26560,
                "newInLastHour": 26560,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://shinenetview[.]quartzprismcloud[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxps://flintpathgate[.]quartzprismcloud[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://59[.]96[.]140[.]47:41015/i",
                "hxxp://113[.]238[.]160[.]64:52980/i",
                "hxxps://prism6hostunit[.]quartzprismcloud[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1106,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1106,
                "newInLastHour": 1099,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shinenetview[.]quartzprismcloud[.]garden\"",
                " \"sparklogicway[.]quartzprismcloud[.]garden\"",
                " \"63efwnh[.]leafspring[.]garden\"",
                " \"glaze3meshnode[.]quartzprismcloud[.]garden\"",
                " \"opalview4site[.]quartzprismcloud[.]garden\""
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
            "iocCount": 9641,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9641,
                "newInLastHour": 53,
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
            "totalIndicators": 54964,
            "activeSources": 8,
            "criticalAlerts": 37089,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27523,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9566,
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
                "count": 274,
                "trend": "stable",
                "percentage": 8
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
                "count": 26487,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://kelcrest9ar[.]sunmeadow[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxp://182[.]114[.]193[.]52:43258/i",
                    "hxxp://115[.]58[.]132[.]220:52965/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]141[.]16[.]115",
                    "1[.]169[.]39[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1562,
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
                "count": 1406,
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
                "count": 673,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "name": " \"n/a",
                "count": 542,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9703a4c17ec31daea75aed1039caab89444337a645968c181c738c49595c868f",
                    " \"c0055200e9d12fe761f2a00ec1abd04a30ca56ead58af82825474c1490df649e",
                    " \"856584606f0bc5182d1e9d20e70c1d07f78355afc974217a128707c9e14fa6d7"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 518,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"kelcrest9ar[.]sunmeadow[.]garden\"",
                    " \"ew559[.]sunmeadow[.]garden\"",
                    " \"1oade4-zone[.]sunmeadow[.]garden\""
                ]
            },
            {
                "name": "Vidar",
                "count": 497,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47079,
        "lastCalculated": "2026-04-28 23:24 IST"
    }
};
