var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

  if (req.url === '/') {
    res.writeHead(200, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);

  } else if (req.url === '/api') {
    var obj = {
    firstname: 'Jonathan',
    lastname: 'Lee'
    };
    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }

}).listen(8080, '127.0.0.1');
