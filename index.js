#!/usr/bin/env node
const path = require('path');
const argvStore = require('argv_store');
const reactInit = require('./command/reactInit');
const { readFileSync } = require('./tools/utils');

const program = new argvStore();
const packageJson = readFileSync(path.resolve(__dirname, './package.json'));

program
    .version(packageJson.version)
    .name('mj-cli')
    .command('create', '初始化', reactInit)
    .options('-r --rename', '[yourname] 重命名')
    .parse();