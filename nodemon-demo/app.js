const http = require("http");

http.createServer((_, res) => {
    res.end("Auto Changed");
}).listen(3000, () => {
    console.log("Listening on 3000");
});