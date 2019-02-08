var express = require('express')
var app = express()
var path = require('path')

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'))
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/about.html'))
})

app.listen(process.env.PORT || 8080)