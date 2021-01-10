const express = require('express')
const path = require('path')
const app = express();
const routes = ('routes');

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('/', function(req, res) {
  res.render('./src/index')
})

app.listen(3000);