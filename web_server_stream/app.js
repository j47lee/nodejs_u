var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){

  res.writeHead(200, {'Content-Type':'text/html'})

  // // responding with one loaded html
  // var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
  // res.end(html)

  //using a stream instead of loading entire HTML first before responding
  fs.createReadStream(__dirname + '/index.html').pipe(res)

}).listen(8080, '127.0.0.1')
