var express = require('express');
var app = express();
var port = 3000;
app.get('/', function(req, res){
    console.log('this is sida web')
})
app.listen(port, function(){
    console.log('server is listenning in port' + port);
})