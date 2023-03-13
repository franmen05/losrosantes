var connect = require('connect');
var serveStatic = require('serve-static');

console.log(__dirname)

const number = 80;
connect()
    .use(serveStatic(__dirname))
    .listen(number, () => console.log(`Server running on ${number} ...`));