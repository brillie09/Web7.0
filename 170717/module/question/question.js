const express = require('express');
const router = express.Router();
const fs = require('fs');
const utilities = require('../utilities');
const db = require('./questionSchema');

const Question = db.Question;

router.get('/', (req, res) => {
    res.render('question');
});

router.post('/', (req, res) => {
    let question = {
        content: req.body.question
    };
    Question.create(question, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Success');
            }
    });
    res.redirect('/api/question');
})

module.exports = router;
