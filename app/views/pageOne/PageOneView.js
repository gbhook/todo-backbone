'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var PageOneView = Backbone.View.extend({

  initialize: function() {
    console.log('Page One') ;

  },

  history:0,

  render:function() {

    this.history++;
    var pageTemplate = _.template(template())({content:'<p>This is the <b>page content</b></p>', status:false, history:this.history});
    this.$el.html(pageTemplate) ;

  }

}) ;

module.exports = PageOneView ;
