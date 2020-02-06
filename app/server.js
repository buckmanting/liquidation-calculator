const express = require('express');
const http = require('http');

const port = process.env.PORT || 3000;

var app = express();

// Configure app startup
app.set('port', port);
app.set('views', __dirname + '/../app/views');
app.set('view engine', 'hbs');

// Configure routes
app.get('/', function(req, res){
  res.render('index');
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
