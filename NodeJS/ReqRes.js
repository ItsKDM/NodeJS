const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.method);
    // process.exit();
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');

    if(url === '/home'){
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><h1>Welcome Home!</h1></body>');
        res.write('</html>');
        res.end();
    } else if(url === '/about'){
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>Welcome to About us page!</h1></body>');
        res.write('</html>');
        res.end();
    } else if(url === '/node'){
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><h1>Welcome to my Node JS Project!</h1></body>');
        res.write('</html>');
        res.end();
    } else{
        res.write('<html>');
        res.write('<head><title>localhost:3000</title></head>');
        res.write('<body><h1>Welcome to localhost:3000!</h1></body>');
        res.write('</html>');
        res.end();
    }
});

server.listen(3000);