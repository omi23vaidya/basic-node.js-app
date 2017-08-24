var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
	var params = querystring.parse(url.parse(req.url).query);
	res.writeHead(200, {"Content-Type": "text/html"});
	if('firstname' in params && 'lastname' in params)
	{
		res.write('You are at our Welcome desk,' + params['firstname'] + ' ' + params['lastname'] + ' . How can I help you??');
		res.write('Proud to be Florida Gator! Go Gators!! #ItsGreatUF');
	}
	res.end();
});

server.listen(2307);
console.log("Server listening on port 8080");