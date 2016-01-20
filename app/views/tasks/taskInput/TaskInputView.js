'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskInputView = Backbone.View.extend({

  initialize:function() {

  },

  render:function() {

    var pageTemplate = _.template(template())({taskName:this.taskNumber});
    //this.$el.appendTo(pageTemplate) ;
    $(pageTemplate).appendTo(this.$el)

  }

});

module.exports = TaskInputView ;
