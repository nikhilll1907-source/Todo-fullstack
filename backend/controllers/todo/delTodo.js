const User = require('../../models/user.model');
const Todo = require('../../models/todo.model');

const delTodo = async (req, res) => {
    const userid = req.id;
    const id = (req.params.id);
    try {
        const todo =await Todo.findOneAndDelete({ _id:id });
        res.status(200).json({ message: `todo deleted succesfully ${todo.task}` })

    }
    catch (err){
        res.status(500).json({
            message: `Database server failed ${err}`
        });
    }
}
module.exports = delTodo;