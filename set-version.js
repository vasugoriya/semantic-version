const fs = require('fs');
const path = require('path');

const branch = process.env.GITHUB_REF_NAME;
const versionFilePath = path.resolve(__dirname, 'version.txt');

let versionPrefix = '';

if (branch === 'main') {
  versionPrefix = 'main';
} else if (branch === 'stage') {
  versionPrefix = 'stage';
}

const version = `${versionPrefix}${process.env.npm_package_version}`;

fs.writeFileSync(versionFilePath, version, 'utf8');
console.log(`Version set to ${version}`);