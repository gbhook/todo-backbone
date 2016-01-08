"use strict";

var Backbone = require('../../vendor/backbone-min') ;
var $ = require('../../vendor/jquery-1.11.3.min');
var template = require('./template.html');
var _= require('../../vendor/underscore-min') ;

var FooterView = Backbone.View.extend({

  template: _.template(template()),

  initialize:function(){

    this.filter = 'all' ;

    this.$allLabel = this.$('#allLabel');
    this.$completedLabel = this.$('#completedLabel');
    this.$activeLabel = this.$('#activeLabel');

    this.listenTo(this.collection, 'update', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'filter', this.highlightFilter);
    this.render();
  },

  completedLabel:$('#completedLabel'),

  events:{
    "click #clear-completed":"clearCompletedTasks"
  },

  render:function(){
    var completed = this.collection.getCompleted().length ;
    var active = this.collection.getActive().length ;


    var taskStatus = {completed:completed, active:active};
    this.$el.html(_.template(template())({data:taskStatus})) ;
  },

  clearCompletedTasks:function(){
    console.log("CLEAR COMPLETED TASKS");
    this.collection.clearCompleted();
  },

  highlightFilter:function(param){
    this.filter = param ;
    console.log('FOOTER HIGHLIGHT');
    console.log(this.completedLabel.length);
    console.log(this.$completedLabel.length);
    console.log(this.$('#completedLabel').length);
    console.log(this.$allLabel);
    console.log(this.$activeLabel.hasClass('selected'));
    console.log('-----------------')

    switch(this.filter){

      case 'all' :
        if(!this.$('#allLabel').hasClass('selected')){ this.$('#allLabel').addClass('selected');}
        if(this.$('#completedLabel').hasClass('selected')){ this.$('#completedLabel').removeClass('selected');}
        if(this.$('#activeLabel').hasClass('selected')){ this.$('#activeLabel').removeClass('selected');}
        break ;

      case 'completed' :
        if(this.$('#allLabel').hasClass('selected')){ this.$('#allLabel').removeClass('selected');}
        if(!this.$('#completedLabel').hasClass('selected')){ this.$('#completedLabel').addClass('selected');}
        if(this.$('#activeLabel').hasClass('selected')){ this.$('#activeLabel').removeClass('selected');}
        break;

      case 'active' :
        if(this.$('#allLabel').hasClass('selected')){ this.$('#allLabel').removeClass('selected');}
        if(this.$('#completedLabel').hasClass('selected')){ this.$('#completedLabel').removeClass('selected');}
        if(!this.$('#activeLabel').hasClass('selected')){ this.$('#activeLabel').addClass('selected');}
        break;
    }
  }

});

module.exports = FooterView ;
