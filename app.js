var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
require('dotenv').config();

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

studRouter = [
  { path: "/create", routerPath: "/create" },
  { path: "/read", routerPath: "/read" },
  { path: "/readById", routerPath: "/readById" },
  { path: "/update", routerPath: "/update" },
  { path: "/delete", routerPath: "/delete" },
];

studRouter.forEach((x) => {
  app.use(x.path, require('./routes' + x.routerPath));
});

mongoose.connect(process.env.MONGO_URI);
mongoose.connection.once('open', () => {
  console.log("MongoDB connected succefully");
}).on('error', (err) => {
  console.log("Error:", err);
});

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
