var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var passport = require('../controllers/auth');
/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/driver', isUser, ctrlMain.driver);
function isUser(req, res, next) {
    console.log(req.session);
    if (req.isAuthenticated())
      return next();
    res.send("Login first!");
}
router.get('/admin', isLoggedIn, ctrlMain.admin);
function isLoggedIn(req, res, next) {
    console.log(req.session);
    if (req.isAuthenticated() && req.user.username == 'admin')
        return next();
    res.redirect("/login");
}
router.get('/login', ctrlMain.login);
router.post('/login', passport.authenticate('local'), function(req, res) {
      if (req.user.username == 'admin'){
      	res.redirect('/admin');
      }else{
      	if (req.user.username == 'driver'){
      		res.redirect('/driver');
      	}else{
      		res.redirect('/login');
      	}
      }
  }
);
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;