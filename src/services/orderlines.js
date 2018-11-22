const fs = require('fs');
const path = require('path');
fs.readFile(path.resolve(__dirname,'./data.txt'),'utf8', (err, data) => {
    const lines = data.split('\n');
    process.stdout.write(`${lines.sort().join('\n')}\n`); 
});