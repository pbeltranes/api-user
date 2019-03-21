var createError = require('http-errors');
// const serverless = require('serverless-http');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");
const cors = require("cors");

/* Aún no disponible require('./src/config/config'); */
/* Aún no disponible require('./src/routes')(app); */



var app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Template for nodemailer

/* app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
 */

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
})
//Controladores de authentications

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.status(500).json({
    "status": 500,
    "error": "Internal server error happened",
  });
});


module.exports = app;
// module.exports.handler = app;