'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskViewDisplay = require('../taskDisplay/TaskDisplayView');
var TaskModel = require('../../../model/TaskModel');

var TaskList = Backbone.View.extend ({


  initialize:function() {
    this.taskUl;
    this.defaultMessage = 'What do you want to do today?';
    this.afterNewMessage = 'What else do you want to do?'

    this.listenTo(this.collection, 'add', this.renderTasks) ;
    this.listenTo(this.collection, 'remove', this.renderTasks);
  },

  events: {

    'keypress' : 'onKeyPress',
    'click #new-task-input-field' : 'onNewTaskClick'

  },

  render: function() {

    var pageTemplate = _.template(template())({defaultMessage:this.defaultMessage});
    this.$el.append(pageTemplate) ;
    this.taskUl = $('#task-list') ;

    this.renderTasks();

  },

  renderTasks: function() {

    this.taskUl.html('');

    _.each(this.collection.models, function(task){
      var taskView = new TaskViewDisplay({model:task, collection:this.collection}) ;
      this.taskUl.append(taskView.render());
    }, this);

  },

  addNewTask:function() {

    var inputValue = $('#new-task-input-field').val();

    if(inputValue==='') {
      $('#new-task-input-field').blur();
      $('#new-task-input-field').val(this.afterNewMessage);
      return ;
    }

    var newTask = new TaskModel({taskName:inputValue});

    this.collection.add(newTask) ;

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
