const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.get('/burger', (req, res) => {
    res.send('GET / burger response')
})

app.post('/burger', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, Here are your ${qty} ${meat} Burger!!`);
})

app.listen(3000, () => {
    console.log('On Port 3000')
})