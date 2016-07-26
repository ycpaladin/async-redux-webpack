var  express = require( 'express') 
var http = require ('http')
var path = require( 'path')
var app = express();
app.use(express.static(path.join(__dirname, '')));
var server = http.createServer(app);
server.listen(3000,function () {
    console.log('app is starting...')
})