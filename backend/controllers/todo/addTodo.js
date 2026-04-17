const User = require('../../models/user.model');
const Todo = require('../../models/todo.model');

const addTodo = async (req, res) => {
    const id = req.id;
    const { task, title } = req.body
    try {
        const todo =await Todo.create({
            title,
            task,
            user:id
        })

        res.status(201).json({
            message: `todo added succesfully ${todo.task}`
        })
    }
        catch (err) {
        res.status(500).json({
            message: `Database server failed ${err}`
        });
    }

}
