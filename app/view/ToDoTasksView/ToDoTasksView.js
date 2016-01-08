'use-strict'

var Backbone = require('../../vendor/backbone-min') ;
var $ = require('../../vendor/jquery-1.11.3.min');
var template = require('./template.html');
//var itemTemplate = require()
var ToDoTaskView = require('../ToDoTaskView/ToDoTaskView');
var _= require('../../vendor/underscore-min') ;


var ToDoView = Backbone.View.extend({

  template: _.template(template()),

  initialize:function(){

    this.filter = 'all';

    this.render() ;
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'update', this.render);
    this.listenTo(this.collection, 'filter', this.filterTasks);

  },
  render:function(){

    this.$el.html(_.template(template())({data:this.collection.length}));
    this.collection.each(this.updateTask, this) ;

  },

  updateTask:function(task) {

    var taskView = new ToDoTaskView({ model: task});
    $('#todo-list').append(taskView.render().el) ;

    switch(this.filter){

      case 'all' :
           taskView.setVisible(true) ;
           break ;

      case 'completed' :
           if(!task.get('status')){ taskView.setVisible(false);}
           else {taskView.setVisible(true);}
           break ;
      case 'active' :
          if(!task.get('status')) { taskView.setVisible(true); }
          else { taskView.setVisible(false);}
          break;
    }

    var taskView = new ToDoTaskView({ model: task});

  },

  filterTasks:function(param){

    this.filter = param ;
    this.render();
  },

  start:function(t) {
    this.tasks = t ;
    this.render() ;
  }
});

module.exports = ToDoView ;
