const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser('secret'));

app.get('/greet', (req, res) => {
    const { name = 'anonyms'} = req.cookies;
    res.send(`Hello, ${name}`)
})

app.get('/setname', (req,res)=> {
    res.cookie('name', 'steve');
    res.cookie('animal', 'harlequin shrimp')
    res.send('ok sent u a cookie')
})

app.get('/getsignedcookie', (req,res,) => {
    res.cookie('fruit', 'grape', {signed: true})
    res.send('ok signed ur cookie')
})

app.get('/verifyfruit', (req,res,) => {
    console.log(req.cookies)
    console.log(req.signedCookies)
    res.send(req.signedCookies)
})

app.listen(3000, (req,res) => {
    console.log('Server ON')
})