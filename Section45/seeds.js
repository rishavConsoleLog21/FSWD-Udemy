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

// const p = new Product({
//     name:'milk',
//     price : 3,
//     category: 'dairy'
// })
// p.save()
//     .then(p => {
//     console.log(`Product saved successfully:${p}`)
// })
//     .catch(err => {
//         console.error(`Failed to save product due to error:${err}`);
//     })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
