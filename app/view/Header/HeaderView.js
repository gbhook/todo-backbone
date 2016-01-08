'use strict';

var template = require('./template.html') ;
var Backbone = require('../../vendor/backbone-min') ;
var _= require('../../vendor/underscore-min') ;
var $ = require('../../vendor/jquery-1.11.3.min');
var Task = require('../../model/Task');

var HeaderView = Backbone.View.extend({

  template: _.template(template()),
  collection:{},
  initialize:function(){
    this.render() ;
    //this.listenTo(this.collection, 'add', this.resetNewTodo) ;
  },

  render:function(){
    this.$el.html(_.template(template())({cta:'Whaddya Wanna Do?'}));
    this.$input = this.$('#new-todo');
  },

  events: {
    'keypress #new-todo' : 'createOnEnter',
    'keydown #new-todo' : 'blurOnEscape'
  },

  resetNewTodo:function(){

    this.$input.val('') ;
    this.$input.attr('placeholder', 'What\'s Next?');
  },

  createOnEnter:function(evt){

    if(evt.charCode===13){

      var taskName = this.$input.val();
      console.log( this.$input.val());
      var newTask = new Task({
        taskName:taskName.trim(),
        status:false
      });

      window.app.tasks.add(newTask) ;
      this.resetNewTodo();
    }
  },

  blurOnEscape:function(){
    this.resetNewTodo();
  }

});

module.exports = HeaderView ;
