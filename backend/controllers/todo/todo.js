const User = require('../../models/user.model');
const Todo = require('../../models/todo.model');

const todo = async (req, res) => {
    const id = req.id;
    try {
        const todos = await Todo.find({ user: id });

        res.status(200).json({
            message: "Todos fetched successfully",
            todos
        });
    }
    catch {
          res.status(500).json({
           message: `Database server failed ${err}`
        });
    }
}
module.exports = todo;
