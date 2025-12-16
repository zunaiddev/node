const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtils');

const hostRouter = express.Router();

hostRouter.get('/add-home', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

hostRouter.post('/add-home', (req, res) => {
    console.log("Request body: ", req.body);
    res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = hostRouter;