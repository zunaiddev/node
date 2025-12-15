// const http = require('http');

const express = require('express');

const app = express();

app.get("/", (req, res, next) => {
    console.log("Inside First Filter....", req.path);
    res.send("<h1>Returned from first one</h1>");
});

// app.use((req, res, next) => {
//     console.log("Inside Second Filter....");
//     next();
// });

// const server = http.createServer(app);

// server.listen(3000, () => console.log("Listening on 3000"));
app.listen(3000, () => console.log("Listening on 3000"));