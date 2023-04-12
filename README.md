# jquery-autosave

![npm](https://img.shields.io/npm/v/@mdoffice/jquery-autosave)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MDOffice/jquery-autosave)

Installation
-----------
```bash
npm install @mdoffice/jquery-autosave
```

Publish (auto)
-----------
```bash
npm version patch
git push origin
git push --tags
```
 - [Make release with last tag](https://github.com/MDOffice/jquery-autosave/releases/new)
 - [Wait to finish build and publish](https://github.com/MDOffice/jquery-autosave/actions)


Publish (manual)
-----------
```bash
npm ci
npm run build
npm version patch
git push origin
git push --tags
npm adduser --registry=https://registry.npmjs.org //if first
npm publish
```
