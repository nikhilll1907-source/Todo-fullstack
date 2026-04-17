const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// require('dotenv').config() // not used in production
const app = express(); 


app.use(cors({
    origin: true,
    credentials: true
}));


const connectDB=require('./db/dbConnection.js');
connectDB();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRouter=require('./routes/user.js');
const todoRouter=require('./routes/todo.js');

app.use('/user',userRouter);
app.use('/todo',todoRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app is working on http://localhost:${PORT}`);
})