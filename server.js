'use strict';

var flash = require('connect-flash'),
    express = require('express'),
    routes = require('./routes'),
    users = require('./routes/user'),
    util = require('util'),
    passport = require('passport'),
    mongoose = require('mongoose');

var User = require("./models/user");

var app = express();

app.configure(function() {
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'channel pressure' }));
  app.use(flash());
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/app'));
});

app.configure('development', function() {
  app.use(require('grunt-contrib-livereload/lib/utils').livereloadSnippet);
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// Setup routes
require('./routes/index')(app);

module.exports = app;