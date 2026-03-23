const express = require('express');
const jwt=require('jsonwebtoken');

const app = express();
const {authMiddleware} = require('./middleware/auth.js');



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let id = 0;
let todo_id=0;

const userdata = [
//     {
//        id,
//        username, //unique
//        password
// }
]
const todo = [
    // {
    //     id,
    //     username,
    //     todo
    // }
]

app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    if (userdata.find(user => user.username === username)) {
        return res.status(403).json({
            err: "This user already exist use another one"
        })
    }
    userdata.push({
        id: ++id,
        username: username,
        password: password
    })
    res.status(201).json({
        message: "New user created"
    })
})



app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (userdata.find(user => (user.username ===username && user.password === password))) {
       const token= jwt.sign({username},"nikhil")
       return res.header.json({
        token
       })
    }
    else return res.status(401).json({
        error: "Some thing is Wrong,Try again."
    })
})


app.post('/add-todo', authMiddleware, (req,res) => {
  const username=req.header.username;
  const content=req.body.content;
 todo.push({
    id: ++todo_id,
    username: username,
    todo:content
 })
 res.status(200).json({message:'todo added succesfully.'})
})

app.get('/todo', authMiddleware, (req,res) => {
  const username=req.header.username;
  const arr=todo.filter((o) => {
    return username===o.username;
  })
  res.status(200).json({arr});
})

const PORT = 3000;
app.listen(3000, () => {
    console.log(`app is working on http://localhost:${PORT}`);
})