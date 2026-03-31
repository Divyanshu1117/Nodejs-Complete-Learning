// External Module:-
const express = require('express');

// Local Module:-
const RequestHandler = require('./user');

const app = express();

app.get("/", (req, res, next) => {
    console.log("Came in first Middleware", req.url, req.method);
    // res.send("<p>Came from First Middleware</p>");
    next();
});

app.post("/submit-details", (req, res, next) => {
    console.log("Came in second Middleware", req.url, req.method);
    res.send("<p>Welcome to Complete Coding Node Js Series</p>");
});

app.use("/", (req, res, next) => {
    console.log("Came from another Middleware", req.url, req.method);
    res.send("<p>Came from another Middleware</p>");
});

// const server = http.createServer(app);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});