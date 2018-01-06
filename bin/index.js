#!/usr/bin/env node

const createComponent = require('./../utils/component')
const PathUtil = require('./../utils/path')

const program = require('commander')

// specify the program info
program
    .version('0.0.1')
    .description('A vue cli component generator for the webpack template')

// create the command
program
    .command('component <name>')
    .action(name => createComponent(name))
    .alias('c')




// parse the arguments
program.parse(process.argv)