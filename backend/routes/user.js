const express = require('express');
const route = express.Router();

const login = require('../controllers/user/login.js');
const signup = require('../controllers/user/signup.js');
const logout = require('../controllers/user/logout.js');

const authMiddleware =require('../middleware/auth.js');


route.post('/login', login)
route.post('/logout',authMiddleware,logout)
route.post('/signup', signup)

module.exports = route;
