const mongoose = require('mongoose');

const todoSchemma = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

})

const Todo = mongoose.model('Todo', todoSchemma);
module.exports = Todo;