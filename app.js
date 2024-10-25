const http = require('http');

const server = http.createServer((request, response) => {
    console.log(request);
    // process.exit(0);
    response.setHeader('Content-Type', 'text/html');
    response.write('<head>');
    response.write('<title>Hello World!</title>');
    response.write('<body><h1>Good Evening everyone!</h1></body>');
    response.write('</head>');
    response.end();

});

server.listen(3000);