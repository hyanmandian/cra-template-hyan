process.on('unhandledRejection', (err) => {
  throw err;
});

const packageJson = require('../package.json');

delete packageJson.scripts['clean-project'];

const path = require('path');
const shell = require('shelljs'); // eslint-disable-line import/no-extraneous-dependencies
const chalk = require('chalk');

const rootDir = path.join(__dirname, '/..');

console.log('Cleaning etalpreliob...'); // eslint-disable-line no-console

// Handle api
shell.rm('-rf', path.join(rootDir, '/src/api/sources/**/*'));
shell.cp(path.join(rootDir, '/scripts/templates/export.js'), path.join(rootDir, '/src/api/index.js')); // eslint-disable-line max-len

// Handle models
shell.rm('-rf', path.join(rootDir, '/src/models/**/*'));
shell.cp(path.join(rootDir, '/scripts/templates/export.js'), path.join(rootDir, '/src/models/index.js')); // eslint-disable-line max-len

// Cleanup components
shell.rm('-rf', path.join(rootDir, '/src/components/Container'));

// Handle containers
shell.rm('-rf', path.join(rootDir, '/src/containers/**/*'));
shell.mkdir(path.join(rootDir, '/src/containers/App'));
shell.cp(path.join(rootDir, '/scripts/templates/App.js'), path.join(rootDir, '/src/containers/App/index.js')); // eslint-disable-line max-len

// Remove .git
shell.rm('-rf', '.git');

// Remove clean-project script
shell.echo(JSON.stringify(packageJson, null, 2)).to(path.join(rootDir, '/package.json'));
shell.rm('-rf', path.join(rootDir, '/scripts/templates'));
shell.rm(path.join(rootDir, '/scripts/clean.js'));

console.log(chalk.green('Cleanup done.\n')); // eslint-disable-line no-console
