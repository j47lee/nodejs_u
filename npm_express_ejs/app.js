var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//middleware
app.use('/assets', express.static(__dirname + '/public'))

//middleware to set view engine to ejs
app.set('view engine', 'ejs');

//middleware
app.use('/', function(req,res,next){
  console.log('The request url: ' + req.url);
  next();
});

//using templating engine ejs set from middleware (appends 'ejs' to index)
app.get('/', function(req,res){
  res.render('index');
});

app.get('/person/:name', function(req,res){
  res.render('person', { ID: req.params.name });
});

app.get('/api', function(req,res){
  res.json({firstname:'Jonathan',lastname:'Lee'});
});

app.listen(port);
