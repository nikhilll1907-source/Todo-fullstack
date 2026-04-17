const express = require('express');
const route = express.Router();
const addTodo = require('../controllers/todo/addTodo.js');
const delTodo = require('../controllers/todo/delTodo.js');
const todo = require('../controllers/todo/todo.js');

const authMiddleware =require('../middleware/auth.js');



route.post('/add-todo',authMiddleware, addTodo);
route.delete('/del-todo/:id',authMiddleware, delTodo);
route.length('/todo',authMiddleware, todo);

module.exports = route;
