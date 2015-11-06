var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  res.writeHead(200, { 'Content-Type':'text/html'})
  //utf8 to convert to a string so we can use replace()
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
  var message = 'A message was injected here'
  html = html.replace('{ Message }', message)
  res.end(html)
}).listen(8080, '127.0.0.1')
