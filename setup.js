const { execSync } = require("child_process");
const { resolve } = require("path");
const {
  lstatSync,
  rmdirSync,
  unlinkSync,
  existsSync,
  readdirSync,
  readFileSync,
  writeFileSync
} = require("fs");

function rimraf(path) {
  if (!existsSync(path)) return;

  readdirSync(path).forEach(file => {
    const curPath = path + "/" + file;

    if (lstatSync(curPath).isDirectory()) return rimraf(curPath);

    unlinkSync(curPath);
  });

  rmdirSync(path);
}

function cleanGit() {
  rimraf(".git/");
  execSync('git init && git add . && git commit -m "Initial commit"');
}

function installDependencies() {
  return execSync("npm install >/dev/null 2>&1");
}

function cleanPackageJson() {
  const packageJson = require("./package.json");

  delete packageJson.scripts["setup"];
  delete packageJson.scripts["contributors:add"];
  delete packageJson.scripts["contributors:generate"];
  delete packageJson.devDependencies["all-contributors-cli"];

  writeFileSync(
    resolve(__dirname, "package.json"),
    JSON.stringify(packageJson, null, 2),
    "utf8"
  );
}

function removeFiles() {
  const foldersToRemove = [];

  const filesToRemove = [
    resolve(__dirname, ".all-contributorsrc"),
    resolve(__dirname, "setup.js"),
    resolve(__dirname, "LICENSE"),
    resolve(__dirname, "src/containers/Home/index.test.tsx"),
    resolve(__dirname, "src/containers/Home/styles.module.scss")
  ];

  const filesToReplace = [
    {
      file: resolve(__dirname, "src/containers/Home/index.tsx"),
      replace: `import React, { Fragment } from "react";

import { Meta } from "#/components/Meta";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Meta title="Home" />
    </Fragment>
  );
};

export default Home;
`
    },
    {
      file: resolve(__dirname, "README.md"),
      replace: `# Project name

This project was started with [React Etalpreliob](https://github.com/hyanmandian/react-etalpreliob).
`
    }
  ];

  foldersToRemove.forEach(folder => rimraf(folder));

  filesToRemove.forEach(file => existsSync(file) && unlinkSync(file));

  filesToReplace.forEach(({ file, replace }) => {
    const content = Array.isArray(replace)
      ? readFileSync(file, "utf8").replace(replace[0], replace[1])
      : replace;

    writeFileSync(file, content, "utf8");
  });
}

process.stdin.resume();
process.stdin.setEncoding("utf8");
process.stdout.write("\n\n");

process.stdout.write("Cleaning package.json...");
cleanPackageJson();
process.stdout.write("\n");

process.stdout.write("Removing example files...");
removeFiles();
process.stdout.write("\n");

process.stdout.write("Installing dependencies...");
installDependencies();
process.stdout.write("\n");

process.stdout.write("Init git...");
cleanGit();
process.stdout.write("\n");

process.stdout.write("Done!");
process.stdout.write("\n\n");
process.exit(0);
