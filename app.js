var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var mysql = require('mysql');
var query = require('queryselector');

// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'me',
//   password : '1234',
//   database : 'o2'
// });
// connection.connect();

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

app.use(session({
  secret: '1234DSFs@adf1234!@#$asd',
  resave: false,
  saveUninitialized: true,
  store:new FileStore()
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.post('/login', function(req, res) {
  var uname = req.body.username;
  var pwd = req.body.password;
  for(var i=0; i<users.length; i++) {
    var user = users[i];
    if(uname === user.username && pwd === user.password) {
      res.cookie('displayName', user.displayName);
      res.redirect('/');
    } else {
      res.send(users)
    }
  }
});
var users = [
  {
    username: 'admin',
    password: '1234',
    displayName: 'admin'
  }
];
app.post('/createAccount', function(req, res){
  var user = {
    username: req.body.username,
    password: req.body.password,
    displayName: req.body.displayName
  };
  var sql = 'INSERT INTO users SET ?';
  conn.query(sql, user, function(err, results){
    if (err) {
      console.log(err);
      res.status(500);
    } else {
      res.redirect('/');
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

module.exports = app;
