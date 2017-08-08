const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    email: {
        type: String
    },
    active: {
        type: Boolean,
        default: true
    }
}, { timestamps: { createdAt: 'created_at' } }, { collection: 'users' });

const userModel = mongoose.model('users', usersSchema);

//TODO tạo 4 hàm cơ bản create, read, update, delete

//create: tạo user
const createUser = (userInfo) => {
    let newUser = {
        username: userInfo.username,
        password: userInfo.password,
        avatar: userInfo.avatar,
        email: userInfo.email
    }
    userModel.create(newUser, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log(doc);
        }
    })
}

//read: lấy user by id
const getUserById = (id, callback) => {
        userModel.findOne({ _id: id }, (err, user) => {
            if (err) {
                callback(err);
            } else {
                let result = {
                    usernam: user.username,
                    email: user.mail,
                    avatar: user.avatar
                }
                callback(null, result);
            }
        })
    }
    //update: update user by id
const updateUserById = () => {

    }
    //delete: delete user by id
const deleteUserById = () => {

}

module.exports = {
    createUser,
    getUserById
}