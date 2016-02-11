'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskViewDisplay = require('../taskDisplay/TaskDisplayView');
var TaskModel = require('../../../model/TaskModel');

var TaskList = Backbone.View.extend({

  initialize: function () {
    this.taskUl;
    this.defaultMessage = 'What do you want to do today?';
    this.afterNewMessage = 'What else do you want to do?';

    this.listenTo(this.collection, 'add', this.renderTasks);
    this.listenTo(this.collection, 'remove', this.renderTasks);
  },

  events: {

    'keypress': 'onKeyPress',
    'click #new-task-input-field': 'onNewTaskClick',
    'click #complete-all': 'onCompleteAllClick'
  },

  render: function () {

    var pageTemplate = _.template(template())({defaultMessage: this.defaultMessage});
    this.$el.append(pageTemplate);
    this.taskUl = $('#task-list');
    this.newTaskInput = $('#new-task-input-field');
    this.renderTasks();

  },

  renderTasks: function (status) {

    status = status || 'all';
    this.taskUl.html('');

    _.each(this.collection.models, function (task) {
      var taskView = new TaskViewDisplay({model: task, collection: this.collection});
      if (this.filterTask(task, status)) {
        this.taskUl.append(taskView.render());
      }

    }, this);

  },

  addNewTask: function () {

    var inputValue = this.newTaskInput.val();
    this.newTaskInput.blur();
    this.newTaskInput.val(this.afterNewMessage);

    if (inputValue === '') { return; };

    var newTask = new TaskModel({taskName: inputValue});
    this.collection.add(newTask);

    console.log('ADD NEW TASK');
  },

  filterTask: function (model, status) {

    switch (status) {
      case 'active' :
        if (!model.get('status')) {
          return true;
        } else {
          return false;
        }
        break;

      case 'completed' :
        if (!model.get('status')) {
          return false;
        } else {
          return true;
        }
        break;

      case 'all' :
      default :
        return true;
        break;
    }
  },

  onKeyPress: function (e) {

    switch (e.charCode) {
      case 13 :
        this.addNewTask();
        break;

    }
  },

  onNewTaskClick: function (e) {

    this.newTaskInput.val('');
  },

  onCompleteAllClick: function (e) {
    console.log('onCompleteAllClick');
    this.collection.each(function(task) {
      console.log(task);
      task.set('status', true) ;
    });
    Backbone.history.loadUrl(Backbone.history.fragment);
  }

});

module.exports = TaskList;
