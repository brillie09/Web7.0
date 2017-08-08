const usersModel = require('./model/userModel');
const mongoose = require('mongoose');
const config = require('./config.json');
mongoose.connect(config.ConnectionString, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect db success');
    }
})
userInfo = {
    username: 'brillie',
    password: 'jkdfaj',
    avatar: 'https://',
    email: 'brillie@gamil.com'
}

userId = 'jdklsafjueow221321';

usersModel.createUser(userInfo);
usersModel.getUserById(userId, (err, doc) => {
    console.log('Test get user');
    console.log(doc);
});