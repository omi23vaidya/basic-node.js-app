var http = require('http');

var server = http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end('<p><strong><center>Heelloooooo from Node.js :D</center></strong><p>');
});

server.listen(2307);
console.log("Server listening on port 8080");