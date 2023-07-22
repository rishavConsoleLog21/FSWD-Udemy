const mongoose = require('mongoose');
const {Schema} = new Schema({
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
        enum: ['fruit', 'vegetable', 'dairy']
    },
    farm: {
        type: Schema.Types.ObjectId,
        ref:'Farm' // this is the reference to Farm model in another file (not created
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;