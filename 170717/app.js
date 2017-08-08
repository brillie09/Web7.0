const express = require('express');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const questionRouter = require('./module/question/question');
const quyetdeRouter = require('./module/quyetde/quyetde');
const fs = require('fs');
const utilities = require('./module/utilities');
const mongoose = require('mongoose');
const config = require('./config.json');

let app = express();
let hbs = exhbs.create({});

app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//connect database
mongoose.connect(config.connectionString, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect db success');
    }
})

//require router
app.use('/api/question', questionRouter);
app.use('/quyetde', quyetdeRouter);

app.use('/', (req, res) => {
    res.redirect('/quyetde')
})

app.get('/quyetde/:id', (req, res) => {
    questionsList = utilities.getQuestionList();
    res.render('result', questionsList[req.params.id]);
});

var server = app.listen(8081, () => {
    var port = server.address().port;
    console.log('Server listening at http://localhost:%s', port);
})

/*trong th nhieu link trung nhau, co th k muon tra lai html ma tra lai data
data -> api
html -> k can api*/
