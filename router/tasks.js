const express = require('express');
const router = express.Router();

const { isAuthenticateToken } = require('../middlewares/auth');

const { createTodo, getTodos, gettodosByID, updateTodo, deleteTodo } = require('../controllers/todos');

router.use('/user', require('./authuser'))

router.post('/todo', isAuthenticateToken, createTodo)
router.get('/todo', isAuthenticateToken, getTodos)
router.get('/todo/:todoId', isAuthenticateToken, gettodosByID)
router.put('/todo/:todoId', isAuthenticateToken, updateTodo)
router.delete('/todo/:todoId', isAuthenticateToken, deleteTodo)

module.exports = router;