'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskViewDisplay = require('../taskDisplay/TaskDisplayView');

var TaskList = Backbone.View.extend ({

  initialize:function() {

  },

  render: function() {

    var pageTemplate = _.template(template())();
    this.$el.append(pageTemplate) ;
    var taskUl = $('#task-list') ;

    for(var i=0; i<5; i++){

      var taskView = new TaskViewDisplay({el:taskUl}) ;
      taskView.taskName = i.toString();
      taskView.render();
    }

  }

});

module.exports = TaskList ;
