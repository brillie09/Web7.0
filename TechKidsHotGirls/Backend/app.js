const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controller/userController');
const config = require('./config.json');
const formidable = require('express-formidable');
mongoose.createConnection(config.ConnectionString, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect db success');
    }
})
let app = express();

app.use(formidable({uploadDir: __dirname + '/upload'}));
app.use((req, res, next) => {
    console.log(req.fields);
    req.body = req.fields;
    next();
})
app.use('/api/user', userController);
app.listen(6969, () => {
    console.log('Listening on 6969')
})