var express = require('express'),
    logger  = require ('morgan')('dev'),
    server  = express(),
    path    = require('path');

var port = process.env.PORT || 8080;

server.use(express.static(__dirname+'/public'));
server.use(logger);

server.get('/', function(req, res){
  res.sendFile('public/html/home.html', {root: __dirname});
});

server.get('/about', function(req, res){
  res.sendFile('public/html/about.html', {root: __dirname});
});

server.get('/services', function(req, res){
  res.sendFile('public/html/services.html', {root: __dirname});
});

server.get('/contact', function(req, res){
  res.sendFile('public/html/contact.html', {root: __dirname});
});

server.listen(8080, function(){
  console.log('Now listening on port '+ port);
});
