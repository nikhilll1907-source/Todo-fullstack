const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let id = 0;

const userdata = [{
    //    id,
    //    username, //unique
    //    password
}]
const todo = [
    {
        // id,
        // username,
        // todo
    }
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
        return res.status(200).json({
            message: "Welcome you are loged in succesfully"
        })
    }
    else return res.status(401).json({
        error: "Some thing is Wrong,Try again."
    })
})

const PORT = 3000;
app.listen(3000, () => {
    console.log(`app is working on http://localhost:${PORT}`);
})