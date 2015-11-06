var greet = require('./greet1')
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!'

var greet3b = require('./greet3');
greet3b.greet();

var greet3c = require('./greet3');
greet3c.test = function(){
  console.log('New test content added after everything.');
}
greet3c.test();


var Greet4 = require('./greet4');
var grtr = new Greet4();
grtr.greet();

var greet5 = require('./greet5').greet;
greet5();

var test = require('./exportTest.js')
test();
