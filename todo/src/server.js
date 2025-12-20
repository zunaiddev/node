import express from 'express';
import {todoRoute} from "./routes/todoRoute.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    const body = req.body;

    console.log(body);

    if (!body) return res.send({message: "Please provide a req body"});
    next();
});

app.use(todoRoute);

app.use((_, res) => {
    res.status(404).send({message: "404 Page Not found"});
});

app.listen(3000, _ => {
    console.log("Server Started.");
});