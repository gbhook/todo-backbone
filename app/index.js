'use strict';

var config = require('./config');
var $ = require('./vendor/jquery-1.11.3.min');
var Backbone = require('./vendor/backbone-min') ;
var ToDoTasksCollection = require('./collection/ToDoTasksCollection');
var Task = require('./model/Task');
var ToDoTasksView = require('./view/ToDoTasksView/TodoTasksView') ;
var ToDoRouter = require('./router/TodoRouter');
var HeaderView = require('./view/Header/HeaderView');
var FooterView = require('./view/Footer/FooterView');

window.app = {};

var toDoTasks = new ToDoTasksCollection([

  new Task({
    taskName:'Watch Backbone Tutorial',
    status:true
  }),

  new Task({
    taskName:'Learn Backbone',
    status:false
  }),
  new Task({
    taskName:'Build ToDo App in Backbone',
    status:false
  }),

  new Task({
    taskName:'Create new framework that modifies Backbone JS',
    status:false
  })

]) ;

window.app.tasks = toDoTasks ;
window.app.router = new ToDoRouter(toDoTasks) ;



window.app.headerView = new HeaderView({el:$('#header'), collection:toDoTasks});
var toDoTasksView = new ToDoTasksView({el:$('#main'), collection:toDoTasks});
var footerView = new FooterView({el:'#footer', collection:toDoTasks});

Backbone.history.start() ;



