const http = require('http');

const PORT = 3000;

const form = `<body>
<form action="/submit" method="POST">
<input type="text" name="name" placeholder="Enter Your name">
<input type="email" name="email" placeholder="Enter Your email">
<input type="submit" value="Submit">
</form>
</body>`;

let COUNT = 0;

const server = http.createServer((req, res) => {
    const URL = req.url;
    COUNT++;

    if (URL === '/') {
        console.log("In Home", COUNT)
        res.write('<head><title>Form</title></head>');
        res.write(form);
        return res.end();
    }

    if (URL === '/submit') {
        const body = [];
        req.on('data', chunk => {
            console.log("Chunk Received: ", chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();

            console.log("Parsed Body: ", parsedBody);

            const params = new URLSearchParams(parsedBody);

            /* const reqBody = {};

             for (const [key, value] of params.entries()) {
                 reqBody[key] = value;
             }*/

            // Just an alternative for the above code
            const reqBody = Object.fromEntries(params);

            console.log("Request Body: ", reqBody);
        });

        res.write('Form Submitted Successfully');
        return res.end();
    }

    res.write('404 Page not found');
    return res.end();
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});