const http = require('http');
const app = require('./app');
const environment = require('./nodemon.json');
const port = environment.env.PORT;
const server = http.createServer((req, res)=>{
    console.log('request made')
});

server.listen(3000, 'localhost',()=>{
    console.log('server running')
});

// app.listen(8081, function () {
//     var host = server.address().address
//     var port = server.address().port
//     console.log("Example app listening at http://%s:%s", host, port)
//  })