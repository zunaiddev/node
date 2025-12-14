const {addForm, getForms} = require('./data');

function handler(req, res) {
    const URL = req.url;
    const METHOD = req.method;

    console.log("Request received: \nURL: ", URL, "\nMETHOD: ", METHOD, "\n");

    if (URL === '/forms' && METHOD === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(getForms()));
        return res.end();
    }

    if (URL === '/forms' && METHOD === 'POST') {
        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });

        req.on('end', () => {
            const params = new URLSearchParams(Buffer.concat(body).toString());
            const form = Object.fromEntries(params);

            console.log(form);
        });

        res.writeHead(201, {'Content-Type': 'application/json'});
        return res.end(JSON.stringify({"message": "form submitted"}));
    }

    res.writeHead(404, {'Content-Type': 'application/json'});
    res.write(`{"message": "Request uri ${URL} with method ${METHOD} not found"}`);
    return res.end();
}

module.exports = handler;