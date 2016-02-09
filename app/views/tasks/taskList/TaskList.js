'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskViewDisplay = require('../taskDisplay/TaskDisplayView');
var TaskModel = require('../../../model/TaskModel');

var TaskList = Backbone.View.extend ({

  tasksCollection:null,

  initialize:function() {
    this.taskUl;
    this.defaultMessage = 'What do you want to do today?';
    this.afterNewMessage = 'What else do you want to do?'
  },

  events: {

    'keypress' : 'onKeyPress',
    'click #new-task-input-field' : 'onNewTaskClick'

  },

  render: function() {

    var pageTemplate = _.template(template())({defaultMessage:this.defaultMessage});
    this.$el.append(pageTemplate) ;
    this.taskUl = $('#task-list') ;

    console.log(this.taskUl);

    _.each(this.tasksCollection.models, function(task){
      var taskView = new TaskViewDisplay({el:this.taskUl, model:task}) ;
      taskView.render();
    }, this);

  },

  addNewTask:function() {

    var inputValue = $('#new-task-input-field').val();

    var newTask = new TaskModel({taskName:inputValue});

    this.tasksCollection.add(newTask) ;
    var taskView = new TaskViewDisplay({el:this.taskUl, model:newTask}) ;
    taskView.render();

    $('#new-task-input-field').val(this.afterNewMessage);
    $('#new-task-input-field').blur();

    console.log('ADD NEW TASK');
  },

  onKeyPress: function(e) {

    switch (e.charCode) {
      case 13 :
            this.addNewTask() ;
            break ;

    }
  },

  onNewTaskClick: function(e) {

    $('#new-task-input-field').val('');
  }

});

module.exports = TaskList ;
