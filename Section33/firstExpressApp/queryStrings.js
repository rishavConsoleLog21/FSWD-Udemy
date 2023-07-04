const express = require('express');
const app = express();

app.get('/', (req, res) => {console.log('we got a new request on home page')
    res.send('This is the home page!')});

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID} =  req.params;
    res.send(`<h1>Veiwing Post ID: ${postID} on thte ${subreddit} Subreddit</h1>`)});

app.get('/dogs', (req, res) => {console.log('we got a new request on dogs')
    res.send('WOOOOOfffff!!!')});

app.get('/cats', (req, res) => {console.log('we got a new request on cats')
    res.send('MEOWWWWW!!!')});

app.post('/cats', (req, res) => {console.log('we got a new request on cats')
    res.send('MEOWWWWW!!!')});


app.post('/search', (req, res) => {
    const {q} = req.query;
    if (!q) {
        res.send('Nothing Found If Nothing Searched');
    }
    res.send(`<h1>Search Result For: ${q} </h1>`)});

app.get('*', (req,res) => {
    res.send(`I dont know that path!!!`)
});
//send request can be sent once that why we are using * at the end
    
app.listen(8080, ()=> {console.log('listening on port 8080')});