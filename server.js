'use strict'

const http = require('http')
const fs = require('fs')

const server =http.createServer(function (request, response) {
    console.log(request.method, request.URL);
    if (request.URL =='/styles.css') {
        const css = fs.readFileSync('styles.css', 'UTF-8');
        response.end(css);
    } else {
    const html = fs.readFileSync('index.html', 'UTF-8');
    response.end(html);
    }
}) ;

server.listen(3000)
console.log('Server started')