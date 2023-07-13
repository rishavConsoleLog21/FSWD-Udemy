const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})


app.get('/', (req, res)=> {
    res.send('Home page')
})

app.get('/dogs', (req, res)=> {
    res.send('WOOOFF')
})


app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

app.listen(3000, () => {
    console.log('App is running on 3000')
})