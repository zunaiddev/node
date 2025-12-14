const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const URL = req.url;

    if (URL === '/') {
        res.write('Home Page');
        return res.end();
    } else if (URL === '/about') {
        res.write('About Page');
        return res.end();
    }

    res.write('404 Page not found');
    return res.end();
});

server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});