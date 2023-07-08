const path = require('path');
const methodOverride = require('method-override')
const express = require('express');
const app = express();
const { v4: uuid } = require('uuid'); //to give new id to new comments


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
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {   
        id: uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
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
    comments.push({username, comment, id: uuid() })
    res.redirect('/comments');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/details', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment =comments.find(c => c.id === id);
    res.render('/comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const {id} = req.params;
    const newComment = req.body.comment;
    const editComment = comments.find(c => c.id === id);
    editComment.comment = newComment;
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
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