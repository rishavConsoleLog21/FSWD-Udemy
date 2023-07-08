const path = require('path');
const express = require('express');
const app = express();


//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true}))
// To parse incoming JSON in POST request body:
app.use(express.json())
// Views folder and EJS setup:
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Our fake database:
const comments = [
    {
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

// INDEX - renders multiple comments
// **********************************
app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments });
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new');
});

app.post('/comments', (req,res) => {
    const { username, comment} = req.body;
    comments.push({username, comment})
    res.redirect('/comments');
})

app.get('/burger', (req, res) => {
    res.send('GET / burger response')
})

app.post('/burger', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, Here are your ${qty} ${meat} Burger!!`);
})

app.listen(3000, () => {
    console.log('On Port 3000')
})