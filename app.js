const express = require("express");
var app = express();

//the listen() method takes two arguments: listen(port, callback)
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
