// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-09T01:16:56.307886+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-09T01:16:55.988564+05:30",
    "lastUpdatedFormatted": "Apr 09, 2026 at 01:16 AM IST",
    "comparisonPeriod": "Apr 08 \u2013 Apr 09, 2026",
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
                "hxxps://booking[.]com-conflrm-spain[.]com/YR52IRMJ",
                "hxxps://www[.]robiox[.]com[.]py/users/369657886823/profile",
                "hxxp://muhammad-ahmad-butt[.]github[.]io/microsoft-homepage-clone",
                "hxxps://sso-auth[.]com/lNt9lBAzB2ilp1HBVg?/g/personal/rahel_anding_schlndler_email/ETvMuE2HPLpPgskR0RfHG0sBk3kf43GwtcnE26u0vW301g?e=rF2mfd",
                "hxxps://dd0[.]qzz[.]io/dana/tkj27/ii/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 800,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 800,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e2dd74e1f664c0ede1d3d8412669e26a5b6d0f026f1d3e64965c17a677fb27c1",
                " \"0a2c926442601cdd883dfc4d4b64b2f275d42fdeab88c082ca1cadbce2aad59c",
                " \"13beedd8a3f0a76dd864ff5693f3da4e70f7abf2fa846c9e51f1c87994ee0f61",
                " \"d6775349cb389f4c7a15478fef2c83baaf24540e28a57a40bd7d8e0fd24e65fa",
                " \"050fb15146ce0c354071e0fde7cd4c7948e89c339c37e27a422fa554b27f6d9e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1590,
                "newInLastHour": 26,
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
                "1[.]123[.]227[.]253",
                "1[.]14[.]197[.]142",
                "1[.]14[.]3[.]240",
                "1[.]173[.]64[.]98"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3871,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3871,
                "newInLastHour": 3871,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]207[.]102[.]177",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21684,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21684,
                "newInLastHour": 21684,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://trace-point[.]gnosticvector[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://87[.]110[.]15[.]80:41932/i",
                "hxxps://shell-svc[.]noospherecore[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://logic-node[.]noospherecore[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://112[.]198[.]135[.]172:39688/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1073,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1073,
                "newInLastHour": 1073,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"trace-point[.]gnosticvector[.]in[.]net\"",
                " \"hxxps://download-version[.]1-5-8[.]com/claude[.]msixbundle\"",
                " \"download-version[.]1-5-8[.]com\"",
                " \"hxxps://project-ms50192kd15[.]pages[.]dev\"",
                " \"project-ms50192kd15[.]pages[.]dev\""
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
            "iocCount": 9517,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9517,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6c05fc4f3c4d499c66f8eb1fe92b85bb24c8eb36",
                "41d24d7d852ee6f28502895bd88cb67cafd485f3",
                "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                "7ce02a4df627573696141e40970ef60e246f9f3f",
                "ab6e202e46c7a303b0183cafb694774877b560dd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49879,
            "activeSources": 8,
            "criticalAlerts": 31923,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9472,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 375,
                "trend": "stable",
                "percentage": 6
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21619,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://item-svc[.]goodtwain[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://61[.]53[.]85[.]113:59799/i",
                    "hxxps://step-node[.]goodtwain[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]123[.]227[.]253",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1564,
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
                "count": 1401,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea",
                    "42f9fb369604befacac247a220b2275c8e3dbb00"
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
                "count": 666,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ac45fe719d822c245e21c7feb1589a058798ab36",
                    "dcc40fee2faa2a722cf639524a942a8cdfcdcf84",
                    "3873395f0d38d252571338283d55d332d853286d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"item-svc[.]goodtwain[.]in[.]net\"",
                    " \"step-node[.]goodtwain[.]in[.]net\"",
                    " \"dual-api[.]goodtwain[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 473,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "19475fe405f20f1a346647ad71edb76bf9640797",
                    "1e7353a4873db7f099b9be0bbcdbd790e9b6014c",
                    "ae8ad53efcfcd551c9f41eebf44d0c35e9eff9d4"
                ]
            },
            {
                "name": "OffLoader",
                "count": 384,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "927e7a993c4e839007a5d10c4f97907cf436ca97",
                    "91218c3dfa270cfad49a8b89b573809da6f9002b",
                    "448e34bdaa4390ecde578cf01c491ed16d6563a0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42012,
        "lastCalculated": "2026-04-09 01:16 IST"
    }
};
