const express = require('express');
const router = express.Router();
const fs = require('fs');
const utilities = require('../utilities');

router.get('/', (req, res) => {
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let random = getRandomInt(0, 4);
    let questionList = utilities.getQuestionList();
    let result = questionList[random];
    question = {
        id: random,
        content: result.content
    }
    res.render('quyetde', question);
})

router.post('/:id', (req, res) => {
    console.log('day la vao id');
    let questionList = utilities.getQuestionList();
    let result = questionList[req.params.id];
    if (req.body.answer == 'yes') {
        result.yes = result.yes ? result.yes + 1 : 1;
    } else {
        result.no = result.no ? result.no + 1 : 1;
    }
    questionList[req.params.id] = result;
    utilities.saveQuestionList(questionList);
    res.render('result', questionList[req.params.id]);
});

module.exports = router;