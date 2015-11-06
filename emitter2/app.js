//USING INTERNAL NODE EVENT EMITTER
var Emitter = require('events');
var configGREET = require('./config').events

var emtr = new Emitter();

emtr.on(configGREET, function(){
	console.log('Hi people')
})

emtr.on(configGREET, function(){
	console.log('Hi everybody')
})

emtr.emit(configGREET)