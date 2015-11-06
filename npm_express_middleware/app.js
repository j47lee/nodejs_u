var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

//middleware using express.static to respond with static assets such as css
app.use('/assets', express.static(__dirname + '/public'))

//middleware
app.use('/', function(req,res,next){
  console.log('Request url: ' + req.url);
  next()
})

// //middleware (leave out the route and it will do it for every route)
// app.use(function(req,res,next){
//   console.log('Request url: ' + req.url);
//   next()
// })

app.get('/', function(req,res){
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><h1>Hello!</h1></html>');
});

app.get('/api', function(req,res){
  res.json({ firstname: "Jonathan", lastname: "Lee" });
});

app.get('/person/:id', function(req,res){
  res.send('<h1>Hello, ' + req.params.id + '!</h1>');
});

app.listen(port);
