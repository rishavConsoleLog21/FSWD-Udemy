const express = require('express');
const app = express();

app.use(() => {console.log('we got a new request')});
app.listen(3000, ()=> {console.log('listening on port 3000')});