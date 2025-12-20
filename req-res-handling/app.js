import express from 'express';

const app = express();

app.use(express.json());

app.post('/', (req, res) => {
    const {id, name, email} = req.body;
    console.log("Request body:", req.body);
    res.send({json: "This is a json response"});
});

app.use((_, res) => {
    res.status(404).send({message: "404 Page not found"});
});

app.listen(3000, () => {
    console.log('Server Started...');
});