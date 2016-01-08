'use strict';

var Backbone = require('../vendor/backbone-min') ;

var Task = Backbone.Model.extend({
  defaults:{
    taskName:'Do this task!',
    status:false
  },
  initialize:function(){
    console.log('Task: ' + this.get('taskName') +' is Created') ;

  },

  toggleStatus:function(){
    this.set({status:!this.get('status')}) ;

  }

})

module.exports = Task ;
