const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp', { useNewUrlParser: true})
    .then(() => {
        console.log('connection successful') 
    })
    .catch((err) => {
        console.log(`Error connecting to database ${err}`)
        //console.log(err)
    });

    const productSchema = new mongoose.Schema({
        name : {
            type : String,
            required : [true,'Name is Required']
            //unique:[true,"This Name already exists"]
            //maxlength: 20 (this will limit the length of name)
            //match(ex- phone no. or email pattern)
        },
        price :{
            type : Number,
            required : [true, 'Price is Required']
            //min: and max: (to set the min and max amount of anything)
        },
        onSale: {
            type : Boolean,
            default: false
        },
        categories: {
            type : [String] //here we are using string inside of array bracket 
        },
        qty: {
            online: {
                type: Number,
                default: 0
            },
            inStore: {
                type: Number,
                default: 0
            }
        }
    });

    productSchema.methods.greet = function () {
        console.log('Hello Hi')
        console.log(`-from ${this.name}`)
    }
    
    const Product = mongoose.model('Product', productSchema);
    
    const findProduct = async () => {
        const foundProduct = await Product.findOne({name: 'Mountain Bike'});
        foundProduct.greet();
    }
    
findProduct();


    // const Product = mongoose.model('Product', productSchema);

    // const bike = new Product({name: 'Mountain Bike',price: 599, categories: ['Cycling', 'Safety']})
    // bike.save()
    //     .then(data => {
    //         console.log('It worked')
    //         console.log(data);
    //     })
    //     .catch(err => {
    //         console.log('Oh no error')
    //         console.log(err)
    //     })