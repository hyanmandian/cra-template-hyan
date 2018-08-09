#! /usr/bin/env node
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const task = process.argv.splice(2, process.argv.length - 1).join(' ');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('\n\n');

function onEnd() {
  process.stdout.write('\nDone!');
  process.exit(0);
}

function onInstallDependencies() {
  process.stdout.write('\n\n');

  rimraf('.git/', () => {
    exec('git init && git add . && git commit -m "Initial commit"', onEnd);
  });
}

if (task === 'setup') {
  process.stdout.write('Installing dependencies... (This might take a while)');

  exec('yarn --version', (err, stdout, stderr) => {
    if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
      exec('npm install', onInstallDependencies);
    } else {
      exec('yarn install', onInstallDependencies);
    }
  });
}

if (task === 'clean') {
}
