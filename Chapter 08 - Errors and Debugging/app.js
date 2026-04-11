const http = require('http');
const testingSyntax = require('./syntax');
// const runtime = require('./runtime');
const logical = require('./logical');
const calculateArea = require('./calculateArea');

// const server = http.createServer((req, res) => {
//     // console.log(req);
//     // testingSyntax();
//     console.log(req.url, req.method);
//     // runtime();
//     logical();
// });

const RequestHandler = require('./user');
const server = http.createServer(RequestHandler);

const PORT = 3002;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});