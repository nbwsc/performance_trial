var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(7002);
  console.log('Express started on port 7002');
}