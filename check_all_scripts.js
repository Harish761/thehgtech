const fs = require('fs');
const glob = require('glob'); // Not available? Let's use recursive fs.readdirSync
const path = require('path');

function getJsFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('.git') && !file.includes('node_modules')) {
            results = results.concat(getJsFiles(file));
        } else if (file.endsWith('.js')) {
            results.push(file);
        }
    });
    return results;
}

const jsFiles = getJsFiles('.');
for (const file of jsFiles) {
    const { execSync } = require('child_process');
    try {
        execSync(`node -c "${file}"`, { stdio: 'ignore' });
    } catch (e) {
        console.log(`SYNTAX ERROR: ${file}`);
    }
}
