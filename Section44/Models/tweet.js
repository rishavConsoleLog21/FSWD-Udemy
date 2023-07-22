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

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// const makeTweets = async ()=>{
//     // const user = new User({ username: 'Chickenfan99', age: 41});
//     const user = await User.findOne({username: 'Chickenfan99'})
//     const tweet2 = new Tweet({text: 'bock bock my chicken makes lots of noise', likes: 123});
//     tweet2.user = user;
//     // user.save();
//     tweet2.save();
// }

// makeTweets();

const findTweet = async() => {
    const t = await Tweet.find({}).populate('user')
    console.log(t);
}

findTweet();

