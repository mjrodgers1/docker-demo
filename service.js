var http = require('http');
var server=http.createServer(function(request, response){ console.log('i think .');
response.writeHead(
200, {"Content-Type": "application/json"}); var data = { 'message' : 'therefor i am' }; response.end(JSON.stringify(data) + '\n');
});

server.listen(8888); console.log('node web service FIRST...');
