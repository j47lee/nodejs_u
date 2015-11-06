var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	this.greeting = 'Hello world!'
}

//sets up prototype chain. Greetr inherits EventEmitter prototype methods
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
	console.log('Someone greeted!: ' + data)
})

greeter1.on('greet', function(data){
	console.log('Someone greeted again!: ' + data)
})

greeter1.greet('Jonathan');
console.log(greeter1)