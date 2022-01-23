var message = 'Hello World';
console.log(message); //or console.log('Hello World');

//Simple nodeJS server
var http = require('http');
var server = http.createServer(function(req, res){
    if((req.url == '/')){
        res.write('<html><body><p>Hello World. This is System Integration Class!!</p></body></html>');
    }
})

server.listen(3000);
console.log('Server is running in port 3000');