const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name Cant Be Blank']
    },
    price: {
        type: Number,
        default: true,
        min: 1
    },
    category: {
        type: String,
        lowercase: true,
        // enum: ['fruit', 'vegetable', 'dairy']
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;