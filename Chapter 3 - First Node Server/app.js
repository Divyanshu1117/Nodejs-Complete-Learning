// HTTP Server using Request Listener Function
// const http = require('http');
// function requestListener(req, res) {
//     console.log(req);
// }
// http.createServer(requestListener);

// HTTP Server using Anonymous Function
// const http = require('http');

// http.createServer((req, res) => {
//     console.log(req);
// });

// HTTP Server Creation and Listening on Port
// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
// }); 

// server.listen(3000);

// HTTP Server with Custom PORT and Callback Message
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});