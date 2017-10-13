var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var router = express.Router();
var hostname = 'localhost';
var port = 8000;

var app = express();
app.use(bodyParser.urlencoded({exntended: false}));
app.use(bodyParser.json());

app.post('/loginDetails', function(req, res) {
    console.log('Got User Details' + '\t' + JSON.stringify(req.body));
});

app.listen(port, hostname, function() {
    console.log('Server listening at http://' + hostname + ':' + port);
});