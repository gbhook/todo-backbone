'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var Task = require('../model/TaskModel');

var TaskCollection = Backbone.Collection.extend({

  model:Task

});
