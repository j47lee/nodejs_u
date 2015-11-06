var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
	console.log('Somehwere, someone said hello.');
})

emtr.on('greet', function(){
	console.log('A greeting occured!');
})

emtr.on('goodbye', function(){
	console.log('A greeting occured!');
})

emtr.emit('greet');
console.log(emtr)