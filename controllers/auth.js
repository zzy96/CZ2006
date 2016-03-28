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
            if (username === 'driver' && password === '123'){
                return done(null, {username: 'driver'});
            }
        }
		return done(null, false);
	}
));

module.exports = passport;