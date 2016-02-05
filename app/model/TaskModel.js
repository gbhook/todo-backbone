'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskModel = Backbone.Model.extend({

  taskName:'',
  taskStatus:'',
  taskId:null

});

module.exports = TaskModel ;
