var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Heelloooooo from Node.js :D');
});

server.listen(2307);
console.log("Server listening on port 8080");