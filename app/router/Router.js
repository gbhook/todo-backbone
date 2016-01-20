'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;
var PageOneView = require('../views/pageOne/PageOneView');
var PageTwoView = require('../views/pageTwo/PageTwoView');
var FooterView = require('../views/footer/FooterView');
var TaskView = require('../views/tasks/taskView/TaskView');

var Router = Backbone.Router.extend({

  initialize: function() {

    this.mainContent = $('#main-content') ;
    this.taskList = $('#taskList');
    //this.pageOne = new PageOneView({el:$('#main-content')});
    //this.pageTwo = new PageTwoView({el:$('#main-content')});
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

    for(var i=0; i<5; i++){
      var taskView = new TaskView({el:this.taskList, taskName:i}) ;
      taskView.render();
    }
  }
}) ;

module.exports = Router ;
