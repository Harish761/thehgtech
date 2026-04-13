// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-14T01:18:46.182046+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-14T01:18:45.908458+05:30",
    "lastUpdatedFormatted": "Apr 14, 2026 at 01:18 AM IST",
    "comparisonPeriod": "Apr 13 \u2013 Apr 14, 2026",
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
                "hxxp://www[.]easy-bank-landing-page-pi[.]vercel[.]app/",
                "hxxp://ldgeer-ledger[.]webflow[.]io/",
                "hxxp://facebook-login-page-clone-gamma[.]vercel[.]app/",
                "hxxps://netflix-clone-azure-nine[.]vercel[.]app/",
                "hxxp://www[.]netflix-clone-azure-nine[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 686,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4147788b1da502a44822584fd2807518de229831ba33d086f6fdb35e4792d828",
                " \"1ac890ff8a824da863fbf28eb585438fd7654abd2653f8d49537fc27bce78704",
                " \"996db74a739c17a3d0ecd2f50cf523dfcbed497c27c1cb9f622f02519db2d6d5",
                " \"c3106f5489c1b841efdc193587b79e9f434f2410e851971f3539b9a043ed1ef3",
                " \"8c9bd82cd489bb95827d3653ae3cfa3ab9879a35e16ef47855265c333198d09f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1548,
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
                "1[.]1[.]176[.]58",
                "1[.]123[.]231[.]55",
                "1[.]15[.]51[.]236",
                "1[.]180[.]153[.]254",
                "1[.]182[.]190[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 1037,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 1037,
                "newInLastHour": 1037,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]190[.]98[.]62",
                "1[.]53[.]110[.]158",
                "1[.]64[.]12[.]160",
                "101[.]126[.]107[.]237",
                "101[.]201[.]171[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25193,
                "newInLastHour": 25193,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://3zpnkdk[.]ditch-obscene[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://alt-5ynta[.]ditch-obscene[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://guafux[.]ditch-obscene[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://45[.]183[.]184[.]74:56199/i",
                "hxxp://182[.]112[.]231[.]140:45371/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 890,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 890,
                "newInLastHour": 883,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"3zpnkdk[.]ditch-obscene[.]in[.]net\"",
                " \"alt-5ynta[.]ditch-obscene[.]in[.]net\"",
                " \"guafux[.]ditch-obscene[.]in[.]net\"",
                " \"psnwbo[.]ditch-obscene[.]in[.]net\"",
                " \"bv9fw[.]chuv2shfile[.]in[.]net\""
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
            "iocCount": 9543,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9543,
                "newInLastHour": 8539,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "021068795797aa6c83cb175fed0fc5da9247e7ca",
                "c02490981880a8827ecc22ee918275d443173cf9",
                "e3555b48a77af5b8012ecc54676f7123783f7549",
                "1895b08f5a49e666e1ed20d115b4960b05a2c01c",
                "fddec1007b0bfffee14304afaeff19a985c3b4c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 44600,
            "activeSources": 8,
            "criticalAlerts": 26848,
            "activeCampaigns": 112
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25817,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1031,
                "trend": "down",
                "percentage": -89
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 295,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 78
            },
            {
                "name": "Tech",
                "percentage": 21
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25143,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mh4j[.]onepal-liat[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://61[.]53[.]72[.]47:48943/i",
                    "hxxp://61[.]53[.]72[.]47:48943/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]153[.]254",
                    "1[.]182[.]190[.]117",
                    "1[.]183[.]0[.]10"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1551,
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
                "name": " \"js.clearfake\"",
                "count": 480,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"mh4j[.]onepal-liat[.]in[.]net\"",
                    " \"gmzhuq[.]phoniche1lo[.]in[.]net\"",
                    " \"4kreqbfj[.]phoniche1lo[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 295,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                    "e43ef806fe5a6767cd9fd7391d11e7db88a22efe",
                    "877b74f2ae6c1758dab9b5ef1bb45472b02dbc56"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://ldgeer-ledger[.]webflow[.]io/",
                    "hxxp://facebook-login-page-clone-gamma[.]vercel[.]app/",
                    "hxxps://netflix-clone-azure-nine[.]vercel[.]app/"
                ]
            },
            {
                "name": " \"n/a",
                "count": 255,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"cb636808cf6ea68f8732c59bee276d024c75e8c143e153a6f8351f9b2f9cd858",
                    " \"e2c72920b15258deaaef003cca1defdce6f6db00ad2f6c5e396a112815bea9eb",
                    " \"7258f4a2cca516541ea58fc46c66d4eacc23245635abe4c9b9283bd96c84458f"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 209,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"06a78211f928ea083284effbff4ed629e840dd5bcd14d61965a58cd6175a2ea1",
                    " \"d88b030bf566c968f46f3163c5efa93d0689b398e34fa21934adbe09cd3c3dcc",
                    " \"5dc3d80d4cff4745b2315333d02bd6f46b17af026ce47b87866cbc6d659d7c06"
                ]
            },
            {
                "name": "OffLoader",
                "count": 151,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c02490981880a8827ecc22ee918275d443173cf9",
                    "d99c3d7ed9e8aa5947b8675eadbee2ae11085f38",
                    "3963ac632a72fd088e1e2089573b8f5c5cf6faa6"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 115,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]cdnisotopes[.]com/\"",
                    " \"hxxp://62[.]60[.]226[.]159/xvzpjyddlu/getdata[.]php\"",
                    " \"hxxps://www[.]lohnabrechnungen[.]net/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 51010,
        "lastCalculated": "2026-04-14 01:18 IST"
    }
};
