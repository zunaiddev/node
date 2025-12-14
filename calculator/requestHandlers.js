const addition = require("./addition");

function requestHandlers(req, res) {
    const URL = req.url;

    if (URL === '/') {
        res.write("<h1>Add Numbers</h1>");
        res.write("<form action='/result' method='POST'>");
        res.write("<input placeholder='First Number' name='num1' />");
        res.write("<input placeholder='Second Number' name='num2'/>");
        res.write("<button>Add</button>");
        res.write("</form>");
        return res.end();
    }

    if (URL === '/result') {
        const body = [];

        req.on("data", chunk => body.push(chunk));
        req.on("end", () => {
            const parsed = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsed);
            const numbers = Object.fromEntries(params);

            const result = addition(Number(numbers.num1), Number(numbers.num2));

            res.write(`<h1>Result: ${result}</h1>`);
            res.end();
        });
        return;
    }

    res.write("404 page not found");
    return res.end();
}

module.exports = requestHandlers;