const http = require('http');
const handler = require('./handler');

const PORT = 3000;

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});