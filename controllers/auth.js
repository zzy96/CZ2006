var db = require('../models/db');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

passport.use(new LocalStrategy(
	function(username, password, done) {
		if (username === 'admin' && password === 'taxime') {
			return done(null, {username: 'admin'});
            }
        else{
        	var drivers = db.getDriverInfo();
        	for (var i=0;i<drivers.length;i++){
        		if (username === drivers[i].username && password === drivers[i].password){
	                return done(null, {"username": username});
	            }
        	}
        }
		return done(null, false);
	}
));

module.exports = passport;