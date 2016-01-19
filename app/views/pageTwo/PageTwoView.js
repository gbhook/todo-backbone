'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var PageTwoView = Backbone.View.extend({

  initialize: function(){
    console.log('PAGE TWO');
  },

  render: function(){
    console.log('Page Two Render') ;
    var pageTemplate = _.template(template())();
    this.$el.html(pageTemplate) ;
  }

});

module.exports = PageTwoView ;
