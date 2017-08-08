const userModel = require('../model/userModel');
const express = require('express')
const router = express.Router();

router.post('/', (req, res) => {
    userModel.createUser(req.body, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.send('Error');
        } else {
            res.status(201);
            res.send('Account Created');
        }
    })
})

router.get('/:id', (req, res) => {
    userModel.getUserById(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
            res.status(500);
            res.send('Error');
        } else {
            res.status(200);
            res.send(user);
        }
    })
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;