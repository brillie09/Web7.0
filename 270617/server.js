const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('public'));

app.get('/question', function(req, res) {
    res.sendFile(__dirname + "/" + "question.html");
})
app.post('/question', urlencodedParser, (req, res) => {
    response = {
        ques: req.body.ques
    };
    fs.appendFile('askedQues.txt', response.ques + '\n');
    res.sendFile(__dirname + "/" + 'askedQues.txt');
})

var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});