const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.get('/', (req, res)=> {
    res.send('Home page')
})

app.get('/dogs', (req, res)=> {
    res.send('WOOOFF')
})

app.listen(3000, () => {
    console.log('App is running on 3000')
})