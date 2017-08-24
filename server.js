var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {
	page = url.parse(req.url).pathname;
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/html"});
	if(page == '/')
	{
		res.write('You are at our Welcome desk. How can I help you??');
	}
	else if(page == '/gators')
	{
		res.write('Hi Gator! Proud to be Florida Gator! Go Gators!! #ItsGreatUF');
	}
	res.end();
});

server.listen(2307);
console.log("Server listening on port 8080");