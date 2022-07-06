const getTodos = require('./get');
const getTodo = require('./get.id');
const createTodo = require('./post');
const updateTodo = require('./update');
const deleteTodo = require('./delete');

module.exports = {
    paths:{
        '/todos':{
            ...getTodos,
            ...createTodo
        },
        '/todos/{id}':{
            ...getTodo,
            ...updateTodo,
            ...deleteTodo
        }
    }
}