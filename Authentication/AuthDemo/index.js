const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo', { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => {
        console.log('mongo connection successful') 
    })
    .catch((err) => {
        console.log('Error connecting to mongo database')
        console.log(err)
    })

app.set('view engine', 'ejs' );
app.set('views', 'views');

app.use(express.urlencoded({ extended: true}));
app.use(session({secret: 'notgoodsecret'}))

app.get('/', (req,res) => {
    res.send('This is the home page')
})

app.get('/register', (req,res) => {
    res.render('register')
})

app.post('/register', async (req,res) => {
    const {password, username} = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/login', (req,res) => {
    res.render('login');
})

app.post('/login',async (req,res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username});
    const validUser = await bcrypt.compare(password, user.password);
    if(validUser) {
        req.session.user_id = user._id;
        res.redirect('/secret')
    }
    else{
        res.redirect('/login')
    }
})

app.get('/secret', (req,res) => {
    if(!req.session.user_id) {
        res.redirect('/login')
    }
    res.send('this is secret!!')
})

app.listen(3000, () => {
    console.log('Server Is On')
})

