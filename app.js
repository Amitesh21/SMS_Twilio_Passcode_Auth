"use strict";

var express = require('express');
var path = require('path');
var app = express();
var routes = require('./routes');

//######setting port to env variable######
var port = process.env.PORT || '4000';
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//######Routing to index.js page checkMassage function #######
app.get('/', routes.checkMessage);


//   Calling the server
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('Example app listening at', host, port);
});
