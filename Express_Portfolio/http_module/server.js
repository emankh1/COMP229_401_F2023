const http = require('http');
ejs.render(dataAndOptions)
http.createServer((req, res) => {
    res.writeHead(200, {
        'content-Type': 'text/plain'
    })
    res.end('Hello World');
    
    

}).listen(4000);
console.log('server runing at http://localhost:4000/');