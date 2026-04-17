const mongoose = require('mongoose');

const userSchemma = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchemma);
module.exports = User;