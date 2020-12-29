var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


mongoose.connect('mongodb+srv://tailor:JJ7lDJFeuDJgBpvK@cluster0.nqpnp.mongodb.net/Tailor?retryWrites=true&w=majority', {
  useNewUrlParser:true,
  useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  console.log('db connect');
});

var fabricRouter = require('./routes/fabric.route');
var frontRouter = require('./routes/front.route');
var bottomRouter = require('./routes/bottom.route');
var beltRouter = require('./routes/belt.route');
var backRouter = require('./routes/back.route');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Authorization, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PATCH");
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/fabric', fabricRouter);
app.use('/front', frontRouter);
app.use('/bottom', bottomRouter);
app.use('/belt', beltRouter);
app.use('/back', backRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
