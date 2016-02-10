'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var TaskModel = Backbone.Model.extend({

  defaults: {
    status: false,
    taskName: ''
  }

});

module.exports = TaskModel;
