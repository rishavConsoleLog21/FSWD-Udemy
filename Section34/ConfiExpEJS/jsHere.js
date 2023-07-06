const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

app.get('/', (req, res) => {
    res.render('Home')
 });

app.get('/rand', (req,res) => {
   const randomNum=Math.floor((Math.random() *21)+1);
   res.render('random',{ randomNum })
});

app.get('/rand/oddeven', (req,res) => {
   const randomNum=Math.floor((Math.random() *21)+1);
   res.render('ConditionalsEJS',{rand: randomNum})
});

app.get('/r/:subreddit', (req, res) => {
   const { subreddit } = req.params;
   const data = redditData[subreddit];
   if(data) {
      res.render('subreddit', { ...data });
   }
   else{
      res.render('notfound', { subreddit });
   }
})

app.get('/dogs', (req, res) => {
   const dogs = ['Blue', 'Rocky', 'Monty','Stephanie','Woody'
   ]
   res.render('dogs', { dogs })
})

app.listen(3000, () => {
    console.log('Listening On Port 3000')
 });