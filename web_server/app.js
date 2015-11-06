var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type':'application/json'});
	res.end('{ "name":"jonathan"}')
}).listen(8080, '127.0.0.1')



// var http = require('http');
//
// http.createServer(function(req,res){
//
// 	console.log(req.headers.host)
// 	res.writeHead(200, { 'Content-Type': 'text/plain' })
// 	res.end('Hello world\n');
//
// }).listen(1337, '127.0.0.1');
//
