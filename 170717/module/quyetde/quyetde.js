const express = require('express');
const router = express.Router();
const fs = require('fs');
const utilities = require('../utilities');
const db = require('../question/questionSchema');

const Question = db.Question;

router.get('/', (req, res) => {
  Question.random((err, question) => {
    res.render('quyetde', question);
  })
})

router.post('/:id', (req, res) => {
    var query = { _id : req.params.id };

    if (req.body.answer == 'yes') {
      //console.log(query);
      //Question.findOneAndUpdate(query, { $inc: { yes: 1 } })
      Question.findOne(query).exec((err, question) => {
          question.yes = question.yes + 1;
          question.save() ;
          let result = {
            content : question.content,
            yes     : question.yes,
            no      : question.no
          }
          return res.render('result', result);
      });
    } else if (req.body.answer == 'no') {
      // console.log('no');
      // Question.findOneAndUpdate(query, { $inc: { no: 1 } })
      Question.findOne(query).exec((err, question) => {
          question.no = question.no + 1;
          question.save() ;
          let result = {
            content : question.content,
            yes     : question.yes,
            no      : question.no
          }
          return res.render('result', result);
      });
    }
});

module.exports = router;
