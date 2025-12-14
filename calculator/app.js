const http = require('http');
const handler = require('./requestHandlers');

const PORT = 3000;

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log("Listening on port", PORT);
});