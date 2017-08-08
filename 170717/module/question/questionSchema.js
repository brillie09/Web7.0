const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuestionSchema = new Schema({
    content: {
        type: String,
        require: true,
        default: ''
    },
    yes: {
        type: Number,
        require: true,
        default: 0
    },
    no: {
        type: Number,
        require: true,
        default: 0
    }
});

QuestionSchema.statics.random = function(cb) {
    this.count((err, count) => {
        if (err) return cb(err);
        var rand = Math.floor(Math.random() * count);
        this.findOne().skip(rand).exec(cb);
    });
}

Question = mongoose.model('questions', QuestionSchema)

module.exports = {
    Question: Question
}