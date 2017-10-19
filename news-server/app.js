var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var news = require('./routes/news');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../news-front/build'));
app.use('/static',express.static(path.join(__dirname, '../news-front/build/static')));

app.use('/', index);
app.use('/news', news);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404)
});

module.exports = app;
