const express = require('express');
const app = express();

app.use((req, res) => {console.log('we got a new request')
res.send('<h1>This is my WebPage!!!</h1>')});
app.listen(3000, ()=> {console.log('listening on port 3000')});