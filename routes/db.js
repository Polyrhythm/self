'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

var mongo = require("mongodb"),
    mongoose = require('mongoose');

var Db = mongo.Db,
    Connection = mongo.Connection,
    Server = mongo.Server,
    BSON = mongo.BSONPure,
    ObjectID = mongo.ObjectID;

var server = new Server('localhost', 27017, {auto_reconnect: true});
var db = new Db('selfdb', server, {safe:true});

// passport local strategy
passport.use(User.createStrategy());

// serialize user on login
passport.serializeUser(User.serializeUser());

// deserialize user on logout
passport.deserializeUser(User.deserializeUser());

// db
db.open(function(err, db) {
  if(!err) {
    console.log('Connected to database');
    db.collection('users', {strict:true}, function(err, collection) {
      if (err) {
        console.log(err);
      }
    });
    db.collection('status', {strict:true}, function(err, collection) {
      if (err) {
        console.log(err);
      }
    });
  }
});

mongoose.connect('mongodb://localhost/selfdb');
