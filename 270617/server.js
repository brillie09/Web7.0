const express = require('express');
const app = express();
const miniapp = require('./router');
/*const mongoose = require('mongoose');
const config = require('./config.json');*/

app.use(express.static('public'));
app.use('/miniapp', miniapp);
/*mongoose.connect(config.connectionString, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('connect db success');
    }
});*/
var server = app.listen(8081, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});