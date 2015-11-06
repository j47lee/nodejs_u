var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

//MIDDLEWARE ==================================================================
app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// create application/json parser
var jsonParser = bodyParser.json()

//ROUTES ======================================================================
app.get('/', function(req,res){
  res.render('index');
});

app.get('/api', function(req,res){
  var obj = {
    firstname: 'Jonathan',
    lastname: 'Lee'
  };
  res.json(obj);
});

//QUERY STRING FROM URL using ...?qstr=...
app.get('/person/:id', function(req,res){
  res.render('index2', { ID: req.params.id, Qstr: req.query.qstr });
});

//req.body added by the urlencodedParser middleware
app.post('/person', urlencodedParser, function(req,res){
  res.send(req.body.firstname)
  console.log(req.body)
  console.log(req.body.firstname)
  console.log(req.body.lastname)
});

app.post('/personjson', jsonParser, function(req,res){
  res.send('Thank you for the JSON using jsonParser')
  console.log(req.body)
  console.log(req.body.firstname_from_json)
  console.log(req.body.lastname_from_json)
})

//START SERVER ================================================================
app.listen(port);
