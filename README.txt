To export something from one page to global - module.exports = {parameters}
To import the exported data - const variableName = require("./pageName")
Read and write file sync - const { readFileSync, writeFileSync } = require('fs')

const { readFileSync, writeFileSync } = require('fs');

writeFileSync('./testing.txt', 'Hello World!');
console.log(readFileSync('./testing.txt', 'utf8'));

for installing npm run this command in terminal

1. npm install --save-dev (developer dependency)
2. npm install (production dependency)
3. npm install -g (install in the device)

install express js

npm install --save express

to parse incoming request body

npm install --save body-parser

to install template engines - ejs, pug, handlebars

npm install --save ejs pug express-handlebars