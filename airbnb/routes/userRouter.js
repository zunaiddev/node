const express = require('express');
const path = require('path');
const rootDir = require('../utils/pathUtils');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = userRouter;