const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/section44', { useNewUrlParser: true})
    .then(() => {
        console.log('mongo connection successful') 
    })
    .catch((err) => {
        console.log('Error connecting to mongo database')
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer','Fall', 'Winter'] 
    }
});

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{type: Schema.Types.ObjectId, ref: "Product"}]

})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//         {name: 'Goddess Melon', price: '4.99', season: 'Summer'},
//         {name:'Sunflower Seeds',price :'3.50',season : 'Spring'},
//         {name:'Baby Carrots',price :'6.80',season : 'Winter'},
//         {name:'Green Beans',price :'2.99',season : 'Fall'}
// ])

const makeFarm = async () => {
    const farm = new Farm({name: 'Fully Belly Farms', city: 'Guinda, CA'})
    const melon = await Product.findOne({name: 'Goddess Melon'})
    farm.products.push(melon)
    await farm.save()
    console.log(farm);
}

 const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Fully Belly Farms'});
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon'});
    farm.products.push(watermelon);
    await farm.save();
    console.log(farm);
}

Farm.findOne({ name: 'Fully Belly Farms'})
    .populate('products')
    .then(farm => console.log(farm))

