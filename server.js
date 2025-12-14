const http = require('http');

const port = 3000;


const server = http.createServer((req, res) => {
    console.log("Request Received....");
    process.exit();
    console.log("Exited Successfully");
});

server.listen(port, _ => {
    console.log(`Running on localhost:${port}`)
});