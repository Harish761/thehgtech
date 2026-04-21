// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-21T11:40:21.421899+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-21T11:40:21.043648+05:30",
    "lastUpdatedFormatted": "Apr 21, 2026 at 11:40 AM IST",
    "comparisonPeriod": "Apr 20 \u2013 Apr 21, 2026",
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
                "hxxp://ahv3ctpms4e[.]webaccess-alert[.]comahv3ctpms4e[.]webaccess-alert[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://sucursal-svp[.]vercel[.]app/",
                "hxxps://creatic[.]com[.]ar/trsdx/",
                "hxxp://microsoft[.]account[.]trustedentity[.]com/http:/microsoft[.]authorised-support[.]com/new-account/EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc3UkY=3Ag==7Wl5URVhEWFFDaFtYUF5ZaEBeQ19oR1ZEREBYRVM=/6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de/",
                "hxxp://microsoft[.]account[.]trustedentity[.]com/http:/microsoft[.]authorised-support[.]com/new-account/EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc3UkY=3Ag==/6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de/?t=EOzAFbYj1bjLmgufSIlKJJR9Kpvsy5kc&p=6Xx5KG1mKRNjeU3rSnC8diFTM7R4V1de"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1121,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1121,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a8ea1c9138c365e208dfa812b0597a1f83a650dba47f09c3ae264fd238236d2d",
                " \"b8703680ccde02b1cca07d32416df55bba3e971030753dfb5cfbebb4ddb3602e",
                " \"ab30fb5ba0d540145ddfc6770a82b5ca2c75840052494f97b2f7e2445621e0b1",
                " \"04c55a8c15f15b4de910bb025f75210a8917714c88381be8de58506c65086985",
                " \"4c89f868fbf17b932ae775b2c3dd51f7f4cd1b7b72a5b2cd059f82a97f13290b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 5,
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
                "1[.]14[.]181[.]94",
                "1[.]159[.]57[.]154",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3140,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3140,
                "newInLastHour": 3140,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]255[.]199",
                "1[.]14[.]181[.]94",
                "1[.]20[.]174[.]45",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25910,
                "newInLastHour": 25910,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://58[.]65[.]215[.]0:42497/i",
                "hxxps://light-mo-on6[.]championincomp[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://117[.]209[.]23[.]255:46920/i",
                "hxxp://110[.]36[.]26[.]86:47749/bin[.]sh",
                "hxxps://warmf-ire5[.]championincomp[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1021,
                "newInLastHour": 1021,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"heavy-lo-ad1[.]tarny-tsedilka[.]in[.]net\"",
                " \"blzaeagent[.]com\"",
                " \"featt[.]fr\"",
                " \"light-mo-on6[.]championincomp[.]in[.]net\"",
                " \"fastenhub[.]com\""
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
            "iocCount": 9621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9621,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9f7fd5816e0bf900bc5142ef5f6f1e9c0fb2cfdf",
                "b93106e8ef0b4d3e5d113dc064bfbba32ec861ae",
                "1773a4873e2b502598f3173dcd3438d5794d2470",
                "9f6a81c2f6dfe7c32948af71c6b834876847b7d7",
                "8ab957510922dd34aa1983008e81b837d0dfcea3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54464,
            "activeSources": 8,
            "criticalAlerts": 36539,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26963,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9576,
                "trend": "up",
                "percentage": 774
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 197,
                "trend": "stable",
                "percentage": 5
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
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
                "count": 25853,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]56[.]219[.]68:46771/i",
                    "hxxps://next-door3[.]guardiansti1l[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://123[.]13[.]0[.]227:46636/i"
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
                    "1[.]176[.]238[.]107",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1583,
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
                "count": 674,
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
                "name": " \"js.clearfake\"",
                "count": 515,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fullr-oom4[.]guardiansti1l[.]in[.]net\"",
                    " \"next-door3[.]guardiansti1l[.]in[.]net\"",
                    " \"city-wa-lk2[.]guardiansti1l[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 500,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8ab957510922dd34aa1983008e81b837d0dfcea3",
                    "56df82cc0b474c9cc9343756093fec855746f664",
                    "0c98eb275733094129754fccb3af42479b5fcdc9"
                ]
            },
            {
                "name": " \"n/a",
                "count": 429,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2a23549e3b73111d473e87fbc1f43e45e8576018af325b96891b6046cadcb3e8",
                    " \"2782475af3287809eabfe279a25a1171a6d71df0f00ddec707c605b4f28021b6",
                    " \"92f8522b1dc06652ca0bf0245a1d80e63229bfcdf5b905ad800882a34aa9e623"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45417,
        "lastCalculated": "2026-04-21 11:40 IST"
    }
};
