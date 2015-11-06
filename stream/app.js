var fs = require('fs');

//readable stream ---> encoding: utf8 to get a string, highWaterMark to limit bit size
var readable = fs.createReadStream(__dirname + '/greet.txt');

//writeable stream ---> writes chunks to new file
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt')

//if file is larger than buffer size, data will come in chunks
readable.on('data', function(chunk){
    console.log(chunk.length);
    //received string(chunks)
    // console.log(chunk);
    //send string(chunks) to writable stream
    writable.write(chunk);
});
