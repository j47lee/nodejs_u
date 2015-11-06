var util = require('util')

var Person = function(){
	this.firstname = 'Jonathan',
	this.last = 'Lee'
}

Person.prototype.greet = function(){
	console.log('Ciao, ' + this.firstname + '!')
}

var Developer = function(){
	Person.call(this)
	this.language = 'JavaScript'
}

util.inherits(Developer, Person)

var jonathan = new Developer();
jonathan.greet()