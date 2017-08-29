const express = require('express');

const app = module.exports = express();
app.use(express.static(__dirname + '/dist'));

let port = 8081;
app.listen(port, function () {
  console.log(`Listening on port ${port}`)
})
