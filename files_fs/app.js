var fs = require('fs');

//synchronous
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);

//asynchronous (callback function ran after V8 is ran and file was read)
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', function(err,data){
  console.log(data);
})

console.log('V8 code done!');

// problem here is if there are many calls asynchronously,
// each call needs to buffer, taking up a lot of memory space
