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

    console.log('RENDER');
    var pageTemplate = _.template(template())();
    this.$el.html(pageTemplate) ;

  }

});

module.exports = FooterView ;
