const fs = require('fs');
const path = require('path');
const ncp = require('copy-paste');
fs.readFile(path.resolve(__dirname, './data.txt'), 'utf8', (err, data) => {
    const lines = data.split('\n');
    const result = []
    for (const line of lines) {
        const parts = removeEnter(line).split(' - ');
        const word = parts[0];
        const translations = returnTranslation(parts[1]);
        const template = `{word: '${word}', translations:[${translations}]}`;
        result.push(template);
    }
    // process.stdout.write(`${result.sort().join(',\n')}\n`); 

    const resultString = `${result.sort().join(',\n')}`;

    ncp.copy(resultString, () => { process.stdout.write('Yap') });

});

function removeEnter(string) {
    const index = string.length - 1;
    let result = string;
    if (string[index].charCodeAt(0) === 13) {
        result = string.slice(0, -1);
    }
    return result;
}

function returnTranslation(string) {
    const translations = superSplit(string, '--', '**', '->', '(').trim().split(', ');
    let result = [];
    for (const t of translations) {
        result.push(`'${t}'`);
    }
    if (result.length === 0)
        result = `'${translations[0]}'`;
    else
        result = result.join(', ');
    return result;
}

function superSplit(string) {
    let result = string;
    for (const arg of arguments) {
        if (arg !== string)
            result = result.split(arg)[0];
    }
    return result;
}