'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;
var FooterView = require('../views/footer/FooterView');
var TaskList = require('../views/tasks/taskList/TaskList');
var TasksCollection = require('../collection/TasksCollection');
var TaskModel = require('../model/TaskModel');

var Router = Backbone.Router.extend({

  initialize: function() {

    this.mainContent = $('#main-content') ;
    this.taskContainerDiv = $('#task-container');

    this.buildData();
    this.buildList();

    this.footer = new FooterView({el:$('footer'), collection:window.app.tasks}) ;
    //this.footer.tasks = window.app.tasks;
    this.footer.render();
  },

  routes: {
    'page/:page': 'gotoPage'
  },

  gotoPage: function(page) {
    console.log('GoTo=' + page) ;

    switch (page) {
      case '1' :

        break ;
      case '2' :

        break ;
    }

  },

  buildData:function(){

    var task1 = new TaskModel({taskName:'Add List Items and Templates'}) ;
    var task2 = new TaskModel({taskName:'Add Footer Links to Page'}) ;
    var task3 = new TaskModel({taskName:'Build Models and Collections And Populate Them with Tasks'}) ;

    window.app.tasks= new TasksCollection([task1,task2,task3]);

  },

  buildList:function(){


      var taskList = new TaskList({el:this.taskContainerDiv}) ;
      taskList.tasksCollection = window.app.tasks ;
      taskList.render();

  }
}) ;

module.exports = Router ;
