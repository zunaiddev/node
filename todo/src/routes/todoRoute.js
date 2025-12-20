import express from "express";

const todoRoute = express.Router();

const todos = [];

todoRoute.get('/todos', (req, res) => {
    res.send({todos: todos});
});

todoRoute.post('/todos', (req, res) => {
    const {title, task} = req.body;

    todos.push({title, task, completed: false, date: new Date()});

    return res.send({title, task});
});

export {todoRoute};