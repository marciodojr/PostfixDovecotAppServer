var express = require('express');
var router = express.Router();
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');

var setRoutes = require('./api/routes/routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
setRoutes(router);

app.use('/api/v1', router);


app.listen(port, function () {
  console.log('Server running on port: ' + port);
});

