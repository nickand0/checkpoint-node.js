//initialisation 
var http = require('http');

//création server
var server = http.createServer(function(request,response){
    response.setHeader('content-Type','text/html');
    response.end('<h1>Hello Node!!!!</h1>\n')
})

server.listen(3000,'localhost',function (){
    console.log(`Server running at http://localhost:3000/`)
})

