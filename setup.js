#! /usr/bin/env node
const { execSync } = require('child_process');
const { resolve } = require('path');
const {
  existsSync,
  readdirSync,
  lstatSync,
  rmdirSync,
  readFileSync,
  writeFileSync,
  unlinkSync,
} = require('fs');

function rimraf(path) {
  if (!existsSync(path)) return;

  readdirSync(path).forEach((file, index) => {
    const curPath = path + '/' + file;

    if (lstatSync(curPath).isDirectory()) return rimraf(curPath);

    unlinkSync(curPath);
  });

  rmdirSync(path);
}

function cleanGit() {
  rimraf('.git/');
  execSync('git init && git add . && git commit -m "Initial commit"');
}

function installDependencies() {
  return process.env.USE_YARN === 'false'
    ? execSync('npm install')
    : execSync('yarn install');
}

function cleanPackageJson() {
  const packageJson = require('./package.json');

  delete packageJson.scripts['setup'];
  delete packageJson.scripts['contributors:add'];
  delete packageJson.scripts['contributors:generate'];
  delete packageJson['author'];
  delete packageJson['name'];
  delete packageJson['repository'];
  delete packageJson['license'];
  delete packageJson['bugs'];
  delete packageJson.devDependencies['all-contributors-cli'];

  writeFileSync(
    resolve(__dirname, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
}

function cleanFiles() {
  const filesToRemove = [
    resolve(__dirname, '.all-contributorsrc'),
    resolve(__dirname, 'src/api/resources/example.js'),
    resolve(__dirname, 'src/models/count.js'),
    resolve(__dirname, 'scripts.js'),
  ];

  const filesToReplace = [
    {
      file: resolve(__dirname, 'package.json'),
      replace: [/react-etalpreliob/gi, ''],
    },
    {
      file: resolve(__dirname, 'src/api/index.js'),
      replace: 'export default {};\n',
    },
    {
      file: resolve(__dirname, 'src/models/index.js'),
      replace: 'export default {};\n',
    },
    {
      file: resolve(__dirname, 'public/index.html'),
      replace: [/React Etalpreliob/gi, ''],
    },
    {
      file: resolve(__dirname, 'src/containers/App/index.js'),
      replace: [/React Etalpreliob/gi, ''],
    },
    {
      file: resolve(__dirname, 'src/containers/Home/index.js'),
      replace: `import React from 'react';

import Container from '@/components/Container';
import Head from '@/components/Head';

export default function Home() {
  return (
    <Container>
      <Head title="Home" />
    </Container>
  );
}
`,
    },
  ];

  filesToRemove.forEach(file => unlinkSync(file));

  filesToReplace.forEach(({ file, replace }) => {
    const content = Array.isArray(replace)
      ? readFileSync(file, 'utf8').replace(replace[0], replace[1])
      : replace;

    writeFileSync(file, content, 'utf8');
  });
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('\n');
