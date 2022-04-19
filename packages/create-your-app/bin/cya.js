#! /usr/bin/env node

const inquire = require('inquirer');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

inquire
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Your name',
      default: 'cya app'
    }
  ])
  .then((answers) => {
    const destUrl = path.join(__dirname, '../../react-template/template');
    const cwdPath = process.cwd();

    const { name } = answers;
    if (!fs.existsSync(name)) fs.mkdirSync(name);
    const targetDir = path.join(cwdPath, name);

    fs.readdir(destUrl, (err, files) => {
      if (err) throw err;
      files.forEach((file) => {
        const stats = fs.lstatSync(path.join(destUrl, file));
        if (stats.isDirectory) {
          const newDirUrl = path.join(targetDir, file);
          if (!fs.existsSync(newDirUrl)) fs.mkdirSync(newDirUrl);
          const dirUrl = path.join(targetDir, file);
          fs.readdir(path.join(destUrl, file), (err, _files) => {
            _files.forEach((_file) => {
              ejs
                .renderFile(path.join(path.join(destUrl, file), _file), answers)
                .then((data) => {
                  fs.writeFileSync(path.join(dirUrl, _file), data);
                });
            });
          });
        } else {
          ejs.renderFile(path.join(destUrl, file), answers).then((data) => {
            fs.writeFileSync(path.join(cwdPath, file), data);
          });
        }
      });
    });
  });
