var express = require('express');
var app = express();

// handle some routes... 
app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/hello1', function(req, res){
  res.send('Hello1 ');
});

app.get('/hello2', function(req, res){
  res.send('Hello2 ');
});

app.get('/hello.txt', function(req, res){
  res.send('Hello World Again');
});

app.get('*', function(req, res){
  res.send('Catching everything else');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

