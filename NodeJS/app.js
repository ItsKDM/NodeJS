const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Darshan');
});

server.listen(4000);