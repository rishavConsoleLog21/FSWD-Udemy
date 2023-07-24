const express = require('express');
const app = express();
const session  = require('express-session');

const sessionOption = {secret: 'thisissecret', resave: false, saveUninitialized: false}
app.use(session(sessionOption));

app.get('/viewcount', (req,res) => {
    if(req.session.count){
        req.session.count +=1;
    } else{
        req.session.count = 1;
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const {username = 'Anonymous'} = req.query;
    req.session.username = username;
})

app.get('/greet', (req,res) => {
    const {username} = req.session;
    res.send(`Welcoome back, ${username}`)
})

app.listen(3000, (req,res) => {
    console.log('Server is ON')
})