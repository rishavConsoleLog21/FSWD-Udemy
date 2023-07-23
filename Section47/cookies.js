const express = require('express');
const app = express();

app.get('/greet', (req, res) => {
    res.send('Hello')
})

app.get('/setname', (req,res)=> {
    res.cookie('name', 'steve')
    res.cookie('animal', 'harlequin shrimp')
    res.send('ok sent u a cookie')
})

app.listen(3000, (req,res) => {
    console.log('Server ON')
})