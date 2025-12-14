function handler(req, res) {
    const URL = req.url;

    if (URL === '/') {
        console.log("Request for Home Page");
        res.write('Home Page');
        return res.end();
    }

    console.log(`Request URI ${URL} not found`);
    res.write('404 Page not found');
    return res.end()
}

// module.exports = handler;

exports = handler;

// module.exports = {
//     handler: handler,
//     extra: "Extra Information"
// }

// exports.handler = handler;
// exports.extra = "Extra Information";