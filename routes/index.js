'use strict';

var passport = require('passport'),
    ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn,
    User = require('../models/user');

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {user: req.user});
  });

  app.get('/partials/feed', ensureLoggedIn('#/login'), function(req, res) {
    res.render('partials/feed', {user: req.user});
  });

  app.get('/partials/:name', function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name,
               {user: req.user, message: req.flash('error')});
  });

  app.post('/login', passport.authenticate('local', {
    failureRedirect: '#/login',
    failureFlash: "Invalid username or password"
  }), function(req, res) {
        return res.redirect('#/app/feed');
      });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('#/login');
  });

  app.post('/signup', function(req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password,
                  function(err, account) {
                    if (err) {
                      console.log(err);
                      req.flash('error', String(err));
                      return res.redirect('#/signup');
                    }

                    return res.redirect('#/app/profile');
                  });
  });
}