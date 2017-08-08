const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let questionSchema = new Schema({
    content: {
        type: String,
        require: true,
    }
})