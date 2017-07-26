const express = require('express');
const router = express.Router();
const fs = require('fs');
const utilities = require('../utilities')

router.get('/', (req, res) => {
    res.render('question');
});

router.post('/:id', (req, res) => {
    let questionList = utilities.getQuestionList();
    question = {
        id: req.params.id,
        content: req.body.question
    };
    questionList.push(question);
    utilities.saveQuestionList(questionList);
    res.redirect('/quyetde');
})

module.exports = router;