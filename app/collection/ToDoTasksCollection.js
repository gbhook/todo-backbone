'use strict';

var Backbone = require('../vendor/backbone-min') ;
var Task = require('./../model/Task');

var ToDoTasks = Backbone.Collection.extend({

  model:Task,

  getActive: function() {
    return this.where({status:false});
  },

  getCompleted: function() {
    return this.where({status:true});
  },

  clearCompleted: function() {
    var completedTasks = this.where({status:true});
    console.log(this) ;

    for (var z=0; z<completedTasks.length; z++){

      var task = completedTasks[z];

      console.log(task) ;
      this.remove(task);

    }

  }



})

module.exports = ToDoTasks ;
