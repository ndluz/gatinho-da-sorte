const express = require('express');
const path = require('path');

const app = express();
  port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('/', function(req, res) {
  res.render('./src/index')
});
app.listen(port);