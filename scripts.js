#! /usr/bin/env node
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const task = process.argv.splice(2, process.argv.length - 1).join(' ');

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('\n');

function onEnd(msg) {
  process.stdout.write(`\n\n${msg}\n\n`);
  process.exit(0);
}

if (task === 'setup') {
  function onInstallDependencies() {
    process.stdout.write('\n\n');

    rimraf('.git/', () => {
      exec(
        'git init && git add . && git commit -m "Initial commit"',
        onEnd.bind(this, 'Done!')
      );
    });
  }

  process.stdout.write('Installing dependencies... (This might take a while)');

  exec('yarn --version', (err, stdout, stderr) => {
    if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false') {
      exec('npm install', onInstallDependencies);
    } else {
      exec('yarn install', onInstallDependencies);
    }
  });

  return;
}

if (task === 'clean') {
  const filesToRemove = [
    path.resolve(__dirname, 'src/api/resources/example.js'),
    path.resolve(__dirname, 'src/models/count.js'),
  ];

  const filesToReplace = [
    {
      file: path.resolve(__dirname, 'src/api/index.js'),
      replace: 'export default {};\n',
    },
    {
      file: path.resolve(__dirname, 'src/models/index.js'),
      replace: 'export default {};\n',
    },
    {
      file: path.resolve(__dirname, 'src/containers/App/index.js'),
      replace: [/React Etalpreliob/gi, ''],
    },
    {
      file: path.resolve(__dirname, 'src/containers/Home/index.js'),
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

  filesToRemove.forEach(file => rimraf.sync(file));

  filesToReplace.forEach(({ file, replace }) => {
    const data = fs.readFileSync(file, 'utf8');

    const content = Array.isArray(replace)
      ? data.replace(replace[0], replace[1])
      : replace;

    fs.writeFileSync(file, content, 'utf8');
  });

  return onEnd('Done!');
}

onEnd('Invalid task!');
