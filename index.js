var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.listen(8080);
// app.listen(process.env.PORT || 8080);