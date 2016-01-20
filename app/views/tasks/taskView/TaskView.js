'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskDisplayView = require('../taskDisplay/TaskDisplayView');
var TaskInputView = require('../taskInput/TaskInputView');

var TaskView = Backbone.View.extend({


  initialize: function() {

    this.taskLi = this.$el.append('<li>') ;
    this.input = new TaskInputView({el:this.taskLi, taskName:this.taskName});
    this.display = new TaskDisplayView({el:this.taskLi, taskName:this.taskName}) ;

  },

  render:function() {

    this.input.render() ;
    this.display.render() ;

  }

});

module.exports = TaskView ;
