var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var pg = require('pg');

var htmlController = require('./controllers/htmlController')
var apiController = require('./controllers/apiController')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	// REPLACE USERNAME AND PASSWORD ANAD DATABASE
	var conString = "postgres://username:password@localhost/mydb";

	var client = new pg.Client(conString);
	client.connect(function(err) {
	  if(err) {
	    return console.error('could not connect to postgres', err);
	  }
	  client.query('SELECT city, temp_lo, temp_hi, prcp, date FROM weather', function(err, result) {
	    if(err) {
	      return console.error('error running query', err);
	    }
			console.log(result.rows[0].city);

	    client.end();
	  });
	});

	next();
});

htmlController(app);
apiController(app);

app.listen(port);
console.log('Listening to port 3000');
