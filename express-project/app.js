const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded());

app.use((req, _, next) => {
    console.log("Request Path", req.path);
    next();
});

app.use((req, _, next) => {
    console.log("Request Method", req.method, "\n");
    next();
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1> ' +
        '<a href="/contact-us">Contact Form</a>');
});

app.get('/contact-us', (req, res) => {
    res.send('<form action="/contact-us" method="POST">' +
        '<input name="name" placeholder="Enter Your name"/> <br/>' +
        '<input name="email" placeholder="Enter Your email" /> <br/>' +
        '<button>Submit</button>' +
        '</form>');
});

app.post('/contact-us', (req, res) => {
    const body = [];
    console.log("Inside contact us post");

    // req.on('data', chunk => {
    //     body.push(chunk);
    //     console.log("chunk: ", chunk);
    // });

    // req.on('end', () => {
    //     const parsed = Buffer.concat(body).toString();
    //     const params = new URLSearchParams(parsed);
    //     const data = Object.fromEntries(params);
    //     console.log("Request Received inside contact us");
    //
    //     console.log(data);
    //     res.send(`<h1>Form Submitted with data: ${data.toString()}</>`);
    // });

    console.log("data: ", req.body);

    res.send(`Form Submitted Successfully. data ${req.body}`);
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));