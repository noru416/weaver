var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');
var mysql = require('mysql');

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'o2'
});
conn.connect();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/community', function(req, res, next) {
    conn.query('SELECT * FROM board', function(err, result) {
	    if(err){
	        throw err;
	    } else {
	        res.render('community', { rows: result});                
	    }
	});
});
router.get('/write', function(req, res, next) {
  if (req.cookies.displayName === '') {
    res.redirect('/login');
  }
  res.render('write', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/createAccount', function(req, res, next) {
  res.render('createAccount', { title: 'Express' });
});

module.exports = router;
