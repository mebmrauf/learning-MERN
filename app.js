const http = require('http');
const fs = require('fs');
require("node:buffer");

const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    if (url === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<head>');
        response.write('<title>NodeJS</title>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        response.write('</head>');
        return response.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        return request.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            return response.end();
        });

    }

    response.setHeader('Content-Type', 'text/html');
    response.write('<head>');
    response.write('<title>Hello World!</title>');
    response.write('<body><h1>Good Night everyone! Have a tight sleep</h1></body>');
    response.write('</head>');
    response.end();
});

server.listen(3000);