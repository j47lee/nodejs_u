var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  
  var obj = {
    firstname: 'Jonathan',
    lastname: 'Lee'
  }
  res.end(JSON.stringify(obj))
  res.end()

  // //external JSON file
  // fs.createReadStream(__dirname + '/names.json').pipe(res)

}).listen(8080, '127.0.0.1')
