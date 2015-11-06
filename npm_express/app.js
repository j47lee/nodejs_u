var express = require('express');
var app = express();

var port = process.env.PORT || 8080

app.get('/', function(req,res){
  res.send('<h1>hello</h1>')
})

app.get('/api', function(req,res){
  res.json({ firstname: 'Jonathan' })
})

app.listen(8080)
