var express = require('express');
var app = express()

var port = process.env.PORT || 8080;

app.get('/', function(req,res){
  res.send('<h1>Hello</h1>');
});

app.get('/person/:id', function(req,res){
  res.send('<h1>Hello ' + req.params.id + '</h1>')
})

app.get('/api', function(req,res){
  res.json({ firstname: "Jonathan", lastname: "Lee"});
});

app.listen(port);
