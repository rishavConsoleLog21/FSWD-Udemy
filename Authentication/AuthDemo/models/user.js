const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Usercame Cannot Be Blank']
    },
    password:  {
        type: String,
        required: [true, 'Password Cannot Be Blank']
    }
})

module.exports = mongoose.model('User', userSchema);