var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');

app.locals.pagetitle = 'Awesome Website';

app.get('/', routes.index);
app.get('/about', routes.about);


app.get('/home', function (req, res) {
    res.send('Express Home');
});

app.get('/home/:name?', function (req, res) {
    var name = req.params.name;
    res.send('Hi I am : ' + name);
});

app.get('*', function (req, res) {
    res.send('Bad route');
});

var server = app.listen(3000, function () {
    console.log('listening to port 3000');
});