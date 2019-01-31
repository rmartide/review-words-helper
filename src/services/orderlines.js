const fs = require('fs');
const path = require('path');
const ncp = require('copy-paste');
fs.readFile(path.resolve(__dirname,'./data.txt'),'utf8', (err, data) => {
    const lines = data.split('\n');
    const resultString = `${lines.sort().join(',\n')}`;
    ncp.copy(resultString, () => { process.stdout.write('Yap') });
    // process.stdout.write(`${lines.sort().join('\n')}\n`); 
});