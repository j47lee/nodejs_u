var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose')
mongoose.connect('mongodb://test:test@ds049854.mongolab.com:49854/addressbook');
var Schema = mongoose.Schema;
var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});
var Person = mongoose.model('Person', personSchema);
var melissa = Person({
	firstname: 'Melissa',
	lastname: 'Ingkom',
	address: '3423 Corona St.'
})
melissa.save(function(err){
	if (err) throw err;
	console.log('Melissa successfully saved to MongoLab DB');
});

var htmlController = require('./controllers/htmlController')
var apiController = require('./controllers/apiController')

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

//middleware
app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);

	Person.find({}, function(err, users){
		if (err) throw err;
		console.log(users);
	})

	next();
});

htmlController(app);
apiController(app);

app.listen(port);
console.log('Listening to port 3000');
