'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskDisplayView = Backbone.View.extend({

  initialize:function() {

    //this.listenTo(this.model, 'change', this.render) ;

  },

  events:{
    'click .statusCheckbox':'onStatusClicked',
    'click label' : 'onTaskClicked'
  },

  render:function() {

    var pageTemplate = _.template(template())({taskStatus:this.model.attributes.status, taskName:this.model.attributes.taskName});

    this.$el.append(pageTemplate) ;
    this.input = this.$('.task-name');
    this.checkbox = this.$('.status-checkbox');
    this.label = this.$('label');
    this.input.hide();
    console.log("QUE?") ;
    console.log(this.input.val());

  },

  onStatusClicked: function() {

    console.log('TaskDisplayView onStatusClicked');
    this.model.set({status:!this.model.get('status')}) ;
  },

  onTaskClicked: function() {
    console.log('TaskDisplayView onTaskClicked') ;
    console.log(this.input);
    this.input.show();
    this.label.hide();
  }

});

module.exports = TaskDisplayView ;
