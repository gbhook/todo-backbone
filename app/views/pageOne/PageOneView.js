'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var PageOneView = Backbone.View.extend({

  initialize: function() {
    console.log('Page One') ;

  },

  render:function() {

    var pageTemplate = _.template(template())();
    this.$el.html(pageTemplate) ;

  }

}) ;

module.exports = PageOneView ;
