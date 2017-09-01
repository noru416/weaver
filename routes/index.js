var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/gallery', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/createAccount', function(req, res, next) {
  res.render('createAccount', { title: 'Express' });
});
router.get('/success', function(req, res, next) {
  res.render('index_user', { title: 'Express' });
});


module.exports = router;
