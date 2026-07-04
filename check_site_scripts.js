const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script[^>]+src=["']([^"']+)["']/g)].map(m => m[1]);

for (const src of scripts) {
    if (src.startsWith('http')) continue;
    let file = src.split('?')[0]; // remove query params
    if (file.startsWith('/')) file = file.slice(1);
    if (!fs.existsSync(file)) {
        console.log(`MISSING: ${file}`);
        continue;
    }
    const { execSync } = require('child_process');
    try {
        execSync(`node -c "${file}"`, { stdio: 'ignore' });
    } catch (e) {
        console.log(`SYNTAX ERROR: ${file}`);
    }
}
