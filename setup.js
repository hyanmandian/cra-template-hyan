const { execSync } = require('child_process');
const { resolve } = require('path');
const {
  lstatSync,
  rmdirSync,
  unlinkSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync,
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
  return execSync(
    `${
      process.env.USE_YARN === 'false' ? 'npm' : 'yarn'
    } install >/dev/null 2>&1`
  );
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

function removeFiles() {
  const foldersToRemove = [
    resolve(__dirname, 'src/containers/Home/__tests__'),
  ];

  const filesToRemove = [
    resolve(__dirname, '.all-contributorsrc'),
    resolve(__dirname, 'src/api/resources/example.js'),
    resolve(__dirname, 'setup.js'),
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
import Container from '#/components/Container';
import Head from '#/components/Head';

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

  foldersToRemove.forEach(folder => rimraf(folder));

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
process.stdout.write('\n\n');

process.stdout.write('Cleaning package.json...');
cleanPackageJson();
process.stdout.write('\n');

process.stdout.write('Removing example files...');
removeFiles();
process.stdout.write('\n');

process.stdout.write('Installing dependencies...');
installDependencies();
process.stdout.write('\n');

process.stdout.write('Init git...');
//cleanGit();
process.stdout.write('\n');

process.stdout.write('Done!');
process.stdout.write('\n\n');
process.exit(0);
