const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const jwt=require('jsonwebtoken');
const app = express();

const {authMiddleware} = require('./middleware/auth.js');

app.use(cors({
    origin: "http://localhost:5173", // Vite default
    credentials: true
}));


app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let id = 0;
let todo_id=0;

let userdata = [
//     {
//        id,
//        username, //unique
//        password
// }
]
let todo = [
    // {
    //     id:1,
    //     username:"nikhil",
    //     todo:"go to gym"
    // },
    //  {
    //     id:2,
    //     username:"2nikhil",
    //     todo:"2go to gym"
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
     const token= jwt.sign({username},"nikhil")
    res.cookie("token", token
    //  {
    //     httpOnly: true,
    //     sameSite: "lax",   // important for localhost
    //     secure: false      // since you're using http
    // }
    );
      res.status(200).json({
    message: "User created successfully"
   });
})



app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (userdata.find(user => (user.username ===username && user.password === password))) {
       const token= jwt.sign({username},"nikhil")
      res.cookie("token",token);
      res.status(200).json({message:"login successfully."})
    }
    else return res.status(401).json({
        error: "Some thing is Wrong,Try again."
    })
})
app.post('/logout',(req,res) => {
  res.cookie("token","");
  res.status(200).json({
    message:"logout succesfully"
  })
})


app.post('/add-todo',authMiddleware,  (req,res) => {
  const username=req.username;
  const content=req.body.content;
 todo.push({
    id: ++todo_id,
    username: username,
    todo:content
 })
 res.status(200).json({message:'todo added succesfully.'})
})

app.get('/todo',authMiddleware,  (req,res) => {
  const username=req.username;
  const arr=todo.filter((o) => {
    return username===o.username;
  })
  res.status(200).json({arr})
})
app.delete('/del-todo',authMiddleware,(req,res) => {
   const username=req.username;
   const id=req.body.id;
 let arr=todo.filter((ele)=>{ return ele.id!=id})
  todo=arr;
 res.status(200).json({message:"todo deleted succesfully"})
})
const PORT = 3000;
app.listen(3000, () => {
    console.log(`app is working on http://localhost:${PORT}`);
})