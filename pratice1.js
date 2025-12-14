const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    const URL = req.url.toLowerCase();

    if (URL === '/') {
        res.write('<h1>Home Page</h1>');
        res.write('<a href="/man">MAN</a><br/>');
        res.write('<a href="/woman">WOMAN</a><br/>');
        res.write('<a href="/child">CHILD</a><br/>');
        res.write('<a href="/cart">CART</a><br/>');
        return res.end();
    }

    if (URL === '/man') {
        res.write('<h1>Welcome to the Man page</h1>');
        return res.end();
    }

    if (URL === '/woman') {
        res.write('<h1>Welcome to the Woman page</h1>');
        return res.end();
    }

    if (URL === '/child') {
        res.write('<h1>Welcome to the Child page</h1>');
        return res.end();
    }

    if (URL === '/cart') {
        res.write('<h1>Welcome to the Cart page</h1>');
        return res.end();
    }

    console.log("Not Found");
    res.write('404 Page not found');
    return res.end();
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

