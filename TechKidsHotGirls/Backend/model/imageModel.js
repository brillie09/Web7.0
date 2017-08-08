const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imagesSchema = new Schema({
    imageUrl: {
        type: String,
        require: true
            //TO DO: phai co dinh dang la http://
    }
})