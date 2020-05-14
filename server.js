const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


var routes = require('./routes/index');
app.use('/api', routes);

app.listen(port);
console.log("listening on potrt: "+port)

module.exports = app;