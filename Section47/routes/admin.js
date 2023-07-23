const express = require('express');
const router = express.Router();

router.use((req,res, next) => {
    if(req.query.isAdmin){
        next();
    }
    else{
        res.send('Sorry not an admin')
    }
})

router.get('/topadmin', (req,res) => {
    res.send('You are admin')
})

router.get('/deleteall', (req,res) => {
    res.send('ok deleted all')
})

module.exports = router;