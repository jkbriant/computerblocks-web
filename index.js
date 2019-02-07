var express = require('express')
var app = express()
var path = require('path')

app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(8080 || process.env.PORT)