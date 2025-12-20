const express = require('express');

const app = express();
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
const path = require('path');
const rootDir = require('./utils/pathUtils');

const PORT = 3000;

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.static(path.join(rootDir, 'public')));
app.use(express.urlencoded());
app.use(userRouter);
app.use('/host', hostRouter);

app.use((req, res) => {
    res.status(404)
        .sendFile(path.join(rootDir, 'views', '404.html'));

});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});