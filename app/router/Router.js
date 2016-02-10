'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;
var FooterView = require('../views/footer/FooterView');
var TaskList = require('../views/tasks/taskList/TaskList');
var TasksCollection = require('../collection/TasksCollection');
var TaskModel = require('../model/TaskModel');

var Router = Backbone.Router.extend({

  initialize: function() {

    this.taskList ;
    this.tasks ;

    this.taskContainerDiv = $('#task-container');

    this.buildData();
    this.buildList();

    this.footer = new FooterView({el:$('footer'), collection:this.tasks}) ;
    this.footer.render();
  },

  routes: {
    'status/:status': 'filterTasks'
  },

  filterTasks: function(status) {

    console.log('Filter Tasks' + status);
    this.taskList.renderTasks(status);

  },

  buildData:function(){

    var task1 = new TaskModel({taskName:'Add List Items and Templates'}) ;
    var task2 = new TaskModel({taskName:'Add Footer Links to Page'}) ;
    var task3 = new TaskModel({taskName:'Build Models and Collections And Populate Them with Tasks'}) ;

    this.tasks= new TasksCollection([task1,task2,task3]);

  },

  buildList:function(){

      this.taskList = new TaskList({el:this.taskContainerDiv, collection:this.tasks}) ;
      this.taskList.render();
  }
}) ;

module.exports = Router ;
