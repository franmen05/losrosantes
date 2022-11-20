var connect = require('connect');
var serveStatic = require('serve-static');

console.log(__dirname)

connect()
    .use(serveStatic(__dirname))
    .listen(80, () => console.log('Server running on 80...'));