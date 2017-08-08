const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const router = express.Router();

//question
router.get('/question', function(req, res) {
    res.sendFile(__dirname + "/public/question.html");
})
router.post('/question', urlEncodedParser, (req, res) => {
    response = {
        ques: req.body.ques
    };
    fs.readFile(__dirname + "/" + "question.json", 'utf-8', function(err, data) {
        data = JSON.parse(data);
        data[ques] = response.ques;
        res.end(JSON.stringify(data));
    });
});
//listQuestions
router.get('/listQuestions', function(req, res) {
    fs.readFile(__dirname + "/" + "question.json", 'utf8', function(err, data) {
        console.log(JSON.stringify(data));
        res.end(data);
    });
});
//ask
router.get('/new', function(req, res) {
    res.sendFile(__dirname + "/public/new.html");
})
router.post('/new', urlEncodedParser, (req, res) => {})

module.exports = router;