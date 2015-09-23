var http = require('http');
var server=http.createServer(function(request, response){ console.log('hello .');
response.writeHead(
200, {"Content-Type": "application/json"}); var data = { 'message' : 'from source control!' }; response.end(JSON.stringify(data) + '\n');
});
server.listen(8888); console.log('github based web service...');
