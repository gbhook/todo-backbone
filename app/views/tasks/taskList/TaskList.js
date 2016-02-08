'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskViewDisplay = require('../taskDisplay/TaskDisplayView');

var TaskList = Backbone.View.extend ({

  tasksCollection:null,

  initialize:function() {

  },

  render: function() {

    var pageTemplate = _.template(template())();
    this.$el.append(pageTemplate) ;
    var taskUl = $('#task-list') ;

    console.log(pageTemplate);

    _.each(this.tasksCollection.models, function(task){
      console.log(task.attributes.taskName) ;
      var taskView = new TaskViewDisplay({el:taskUl}) ;
      taskView.taskName = task.attributes.taskName;
      taskView.model = task ;
      taskView.render();
    });

    /*for(var i=0; i<5; i++){

      var taskView = new TaskViewDisplay({el:taskUl}) ;
      taskView.taskName = i.toString();
      taskView.render();
    }*/

  },

  buildTasks: function(){

  }

});

module.exports = TaskList ;
