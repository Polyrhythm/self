'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Status = new Schema
    ({
      status     : String,
      date       : Date
    },
     {
       collection : 'status'
     });

module.exports = mongoose.model('Status', Status);