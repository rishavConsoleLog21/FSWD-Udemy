const express = require('express');
const app = express();

app.get('/', (req, res) => {console.log('we got a new request on home page')
    res.send('This is the home page')});

app.get('/dogs', (req, res) => {console.log('we got a new request on dogs')
    res.send('WOOOOOfffff!!!')});

app.get('/cats', (req, res) => {console.log('we got a new request on cats')
    res.send('MEOWWWWW!!!')});

app.post('/cats', (req, res) => {console.log('we got a new request on cats')
    res.send('MEOWWWWW!!!')});

app.get('*', (req,res) => {
    res.send(`I dont know that path!!!`)
});
//send request can be sent once that why we are using * at the end
    
app.listen(3000, ()=> {console.log('listening on port 3000')});