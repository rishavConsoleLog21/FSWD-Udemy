const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
const AppError =require('./appError');


const Product =require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/farmStore', { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(() => {
        console.log('mongo connection successful') 
    })
    .catch((err) => {
        console.log('Error connecting to mongo database')
        console.log(err)
    })


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res, next) => {
    try {
        const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index.ejs', { products, category })
    }
    else {
        const products = await Product.find({})
        res.render('products/index.ejs', { products, category: 'All'})
    }
    // console.log(products)//It will show in shell
    }
    catch(e){
        next(e)
    }
    
})

app.get('/products/newProduct', (req,res) => {
    // throw new AppError('Not Allowed', 401);
    res.render('products/newProduct', { categories })
})

app.post('/products',async (req, res, next) => {
    try {
        const newProductAdded = new Product(req.body);
        await newProductAdded.save();
        res.redirect(`/products/${newProductAdded._id}`)
    }
    catch(e){
        next(e);
    }
 
})

app.get('/products/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        // if (!ObjectID.isValid(id)) {
        //     throw new AppError('Invalid Id', 400);
        // }
        const product = await Product.findById(id)
        if (!product) {
            throw new AppError('Product Not Found', 404);
        }
        res.render('products/show', {product})
    } catch (e) {
        next(e);
    }
});

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            throw new AppError('Product Not Found', 404)
        }
        res.render('products/edit', { product, categories })
    }
    catch(e){
        next(e);
    }
    
})

app.put('/products/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true})
    res.redirect(`/products/${product._id}`)
    }
    catch (e){
        next(e)
    }
    
})

app.delete('/products/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
    }
    catch(e){
        next(e);
    }
    
})

app.use((err,req,res,next) => {
    const { status = 500, message = 'Something Went Wrong'} = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App Is Listening On Port 3000')
})