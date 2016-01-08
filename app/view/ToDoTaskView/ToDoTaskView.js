"use strict";

var template = require('./template.html') ;
var Backbone = require('../../vendor/backbone-min') ;
var _= require('../../vendor/underscore-min') ;
var $ = require('../../vendor/jquery-1.11.3.min');

var ToDoItemView = Backbone.View.extend({

  template: _.template(template()),
  tagName:'li',

  initialize:function() {
    this.listenTo(this.model, 'change:status', this.statusChange) ;
    this.listenTo(this.model, 'change:taskName', this.taskNameChanged);
    this.listenTo(this.model, 'change', this.update);
    this.listenTo(this.model, 'destroy', this.remove) ;
    this.listenTo(this.model, 'visible', this.toggleVisible) ;
  },

  events: {
    'click .toggle': 'toggleClicked',
    'dblclick label' : 'edit',
    'click .destroy' : 'deleteTask',
    'keypress .edit' : 'updateOnEnter',
    'keydown .edit' : 'revertOnEscape',
    'blur .edit' : 'close'

  },

  render:function(){

    this.$el.html(_.template(template())({data:this.model.attributes}));
    this.$editInput = this.$('.edit');
    this.$label = this.$('label');
    console.log(this.$el) ;
    return this;
  },

  toggleClicked:function(){

    this.model.toggleStatus();
  },

  edit:function(){
    console.log("EDIT LABEL");
    this.$label.hide() ;
    this.$editInput.show() ;
    this.$editInput.focus() ;
  },

  commitEdits:function(){
    var val = this.$editInput.val();
    var trimmed = val.trim();
    this.model.set({taskName:trimmed});
    console.log("Commit Task Name= " + this.model.get('taskName'));
  },

  updateOnEnter:function(evt){

    console.log("KEYPRESS= " + evt.charCode) ;
    console.log("KEYPRESS Which= " + evt.which);

    if(evt.charCode===13){
      this.$editInput.blur();
      this.$editInput.hide();
      this.$label.show() ;
      this.commitEdits();
    }

  },

  revertOnEscape:function(evt){

  },

  statusChange:function(){
    console.log("STATUS HAS CHANGED") ;

  },

  taskNameChanged:function(){
    console.log("Task Name Changed");
    this.$label.html(this.model.get('taskName'));
  },

  update:function(){
    window.app.tasks.trigger('taskStatusUpdate');
  },

  deleteTask:function(){
    console.log("Delete this task");
    this.model.destroy();
    window.app.tasks.trigger('taskStatusUpdate');
  },

  toggleVisible:function(){
    console.log("Toggle Visible") ;
  },

  setVisible:function(val){

    if(val) this.$el.show();
    else this.$el.hide();
  }

});

module.exports = ToDoItemView ;



