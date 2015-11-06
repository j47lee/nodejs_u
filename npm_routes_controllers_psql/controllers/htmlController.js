var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var pg = require('pg');

module.exports = function(app){

  app.get('/', function(req, res) {
  	res.render('index');
  });

  app.get('/person/:id', function(req, res) {
  	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
  });

  app.post('/person', urlencodedParser, function(req, res) {


    	// REPLACE USERNAME AND PASSWORD ANAD DATABASE
    	var conString = "postgres://user:password@localhost/mydb";

    	var client = new pg.Client(conString);
    	client.connect(function(err) {
    	  if(err) {
    	    return console.error('could not connect to postgres', err);
    	  }
    	  client.query('SELECT city, temp_lo, temp_hi, prcp, date FROM weather', function(err, result) {
    	    if(err) {
    	      return console.error('error running query', err);
    	    }
    			console.log(result.rows[0]);

          // res.send('Thank you!' + result.rows[0].city);
          res.render('weather.ejs', {
                                      CITY: result.rows[0].city
                                      ,TEMPLO: result.rows[0].temp_lo
                                      ,TEMPHI: result.rows[0].temp_hi
                                      ,PRCP: result.rows[0].prcp
                                      ,DATE: result.rows[0].date
                                    })

    	    client.end();
    	  });
    	});

    	console.log(req.body.firstname);
    	console.log(req.body.lastname);


  });

}
