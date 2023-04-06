"use strict";
var express = require('express');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(time);
    res.send(time);
});
app.listen(port, () => {
    console.log('Example app listening on port:', port);
});
