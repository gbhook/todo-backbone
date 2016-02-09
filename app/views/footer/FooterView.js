'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var FooterView = Backbone.View.extend({

  tasks:null,

  initialize:function(){
    console.log('Footer Initialized');
  },

  render:function(){

    var tasksLeft = this.tasks.length ;
    var pageTemplate = _.template(template())({tasksLeft:tasksLeft});
    this.$el.html(pageTemplate) ;

  }

});

module.exports = FooterView ;
