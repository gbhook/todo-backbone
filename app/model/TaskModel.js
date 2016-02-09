'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var TaskModel = Backbone.Model.extend({

 //taskName:'',
  defaults:{
    status:false,
    taskName:''
  }
  //taskId:null

});

module.exports = TaskModel ;
