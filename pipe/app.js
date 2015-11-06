var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')

//gzips content
var gzip = zlib.createGzip();

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')

//straight foward readable stream to writeable stream
readable.pipe(writable)

//method chaining to pipe readable to gzip (condense) and pipe gzipped content to compressed (greet.txt.gz) file
readable.pipe(gzip).pipe(compressed)
