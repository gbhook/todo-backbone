'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Task = require('../model/TaskModel');

var TasksCollection = Backbone.Collection.extend({

  model:Task

});

module.exports = TasksCollection ;
