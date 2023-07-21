const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/section44', { useNewUrlParser: true})
    .then(() => {
        console.log('mongo connection successful') 
    })
    .catch((err) => {
        console.log('Error connecting to mongo database')
        console.log(err)
    })

    const userSchema = new mongoose.Schema({
        first: String,
        last: String,
        addresses: [
            {
                _id: {_id: false},
                street: String,
                city: String,
                state: String,
                country: {
                    type: String,
                    required: true
                }
            }
        ]
    })  

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame st.',
        city: 'Delhi',
        State: 'Delhi',
        country: 'India',
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: '99 3rd St.',
        city: 'Delhi',
        State: 'Delhi',
        country: 'India',
    })
    const res = await user.save()
    console.log(res);
}

addAddress('64ba90a354ba6ea53c7c7bc3')