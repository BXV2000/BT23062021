var express = require('express');
var app = express();
app.set('view engine', 'ejs');
// index page 
app.get('/', function(req, res) {
    res.render(__dirname+'/views/pages/index.ejs');
});

app.use(express.static('public'));

app.listen(8080);