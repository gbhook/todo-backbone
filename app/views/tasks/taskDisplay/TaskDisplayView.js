'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskDisplayView = Backbone.View.extend({

  taskName:null,

  initialize:function() {
    this.el =document.createElement('li') ;
  },

  render:function() {

    console.log(this.$el);
    var pageTemplate = _.template(template())({taskName:this.taskName});
    this.$el.append(pageTemplate) ;

  }

});

module.exports = TaskDisplayView ;
