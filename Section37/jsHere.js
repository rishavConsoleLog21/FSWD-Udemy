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

