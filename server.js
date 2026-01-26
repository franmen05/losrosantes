var connect = require('connect');
var serveStatic = require('serve-static');

console.log(__dirname)

const number = 8011;
connect()
    .use(serveStatic(__dirname))
    .listen(number, () => console.log(`Server running on ${number} ...`));