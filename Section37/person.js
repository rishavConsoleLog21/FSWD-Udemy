const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true})
    .then(() => {
        console.log('connection successful') 
    })
    .catch((err) => {
        console.log(`Error connecting to database ${err}`)
        //console.log(err)
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullname').get(function (){
    return `${this.first} ${this.last}`
})

const Person = mongoose.model('Person', personSchema);