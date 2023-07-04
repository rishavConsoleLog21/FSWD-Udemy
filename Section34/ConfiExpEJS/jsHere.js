const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('Home')
 });

app.get('/rand', (req,res) => {
   const randomNum=Math.floor((Math.random() *21)+1);
   res.render('random',{rand: randomNum})
});

 app.listen(3000, () => {
    console.log('Listening On Port 3000')
 });