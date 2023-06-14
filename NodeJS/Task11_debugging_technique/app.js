//Import Module
const http = require('http');
const routes = require('./routes');

//Creating HTTP Server
const server = http.createServer(routes);

server.listen(3000);