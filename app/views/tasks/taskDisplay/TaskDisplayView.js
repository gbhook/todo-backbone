'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskDisplayView = Backbone.View.extend({

  model:{},

  initialize:function() {

  },

  render:function() {

    //this.el = document.getElementById('task-list');
    console.log(this.model);

    var pageTemplate = _.template(template())({taskStatus:this.model.attributes.status, taskName:this.model.attributes.taskName});
    this.$el.append(pageTemplate) ;

  }

});

module.exports = TaskDisplayView ;
