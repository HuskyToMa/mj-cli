#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { downLoad } = require(`${path.resolve(__dirname, './tools/downLoad')}`);
const argvStore = require('@mj/argv_store');
const { getInquirerResult } = require('./tools/inquirerFunc');


const program = new argvStore();

const readFileSync = (url) => {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, url)).toString());
}
const packageJson = readFileSync('./package.json');

const reactInit = async function(){
    const argv = this.argvs.keyMap;

    const downLoadTypes = readFileSync('./typeManifest.json');
    const renameParam = argv['-r'] || argv['--rename'] || '';
    const options = await getInquirerResult();

    const url = downLoadTypes.react;
    downLoad(options, url, renameParam);
}

program
    .version(packageJson.version)
    .name('mj-cli')
    .command('create', '初始化', reactInit)
    .options('-r --rename', '[yourname] 重命名')
    .parse();