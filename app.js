const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<head>');
        response.write('<title>Hello World!</title>');
        response.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Submit</button></form></body>');
        response.write('</head>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'Ulala');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<head>');
    response.write('<title>Hello World!</title>');
    response.write('<body><h1>Good Night everyone! Have a tight sleep</h1></body>');
    response.write('</head>');
    response.end();

});

server.listen(3000);