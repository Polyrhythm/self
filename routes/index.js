'use strict';

var passport = require('passport'),
    User = require('../models/user');

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('#/login');
}

module.exports = function(app) {
  app.get('/flash', function(req, res){
    req.flash('info', 'Flash is back!');
    res.redirect('/');
  });

  app.get('/', function(req, res) {
    res.render('index', {user: req.user});
  });

  app.get('/partials/feed', ensureAuthenticated, function(req, res) {
    res.render('partials/feed', {user: req.user});
  });

  app.get('/partials/:name', function(req, res) {
    var name = req.params.name;
    res.render('partials/' + name, {user: req.user});
  });

  app.post('/login', passport.authenticate('local', {
    failureRedirect: '#/login',
    failureFlash: "Invalid username or password"
  }), function(req, res) {
        res.redirect('#/app/feed');
      });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  app.post('/signup', function(req, res) {
    User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password,
                  function(err, account) {
                    if (err) {
                      console.log(err);
                      res.redirect('#/signup');
                    }

                    res.redirect('#/app/profile');
                  });
  });
}