'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;
var FooterView = require('../views/footer/FooterView');
var TaskList = require('../views/tasks/taskList/TaskList');

var Router = Backbone.Router.extend({

  initialize: function() {

    this.mainContent = $('#main-content') ;
    this.taskListDiv = $('#task-list');
    this.footer = new FooterView({el:$('footer')}) ;
    this.footer.render();

    this.buildList();
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

  buildList:function(){


      var taskList = new TaskList({el:this.taskListDiv}) ;
      taskList.taskName = i.toString();
      taskList.render();

  }
}) ;

module.exports = Router ;
