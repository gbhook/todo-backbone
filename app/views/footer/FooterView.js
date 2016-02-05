'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var FooterView = Backbone.View.extend({

  initialize:function(){
    console.log('Footer Initialized');
  },

  render:function(){

    var pageTemplate = _.template(template())({tasksLeft:5});
    this.$el.html(pageTemplate) ;

  }

});

module.exports = FooterView ;
