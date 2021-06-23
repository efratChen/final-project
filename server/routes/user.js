var express = require('express')
var app = express()

app.get('/login', function (req, res) {
    res.send('GET request to the homepage')
  })