const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp', { useNewUrlParser: true})
    .then(() => {
        console.log('connection successful') 
    })
    .catch((err) => {
        console.log(`Error connecting to database ${err}`)
        //console.log(err)
    });


//for handling error
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, 'connection error:'));
// db.once("open", function() {
//     console.log('we are connected!')
// });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);
const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });
