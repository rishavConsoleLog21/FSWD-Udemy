const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product =require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStore', { useNewUrlParser: true})
    .then(() => {
        console.log('mongo connection successful') 
    })
    .catch((err) => {
        console.log(`Error connecting to mongo database ${err}`)
        //console.log(err)
    });



app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    // console.log(products)//It will show in shell
    res.render('products/index.ejs', { products})
})

app.get('/products/:id', async (req,res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show.ejs', { product })
})

app.get('/products/new', (req,res) => {
    res.render('products/new.ejs')
})

app.listen(3000, () => {
    console.log('App Is Listening On Port 3000')
})