'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskDisplayView = Backbone.View.extend({

  tagName: 'div',
  taskCount:0,

  initialize: function () {

    this.listenTo(this.model, 'change:taskName', this.update);

  },

  events: {
    'click .status-checkbox': 'onStatusClicked',
    'click label': 'onTaskClicked',
    'click button': 'onDeleteButtonClicked',
    'blur .task-name': 'onTaskBlur'
  },

  render: function () {

    var showHR = true ;
    if (this.taskCount === this.collection.length) {
      showHR = false ;
    }

    var data = {
      taskStatus: this.model.attributes.status,
      taskName: this.model.attributes.taskName,
      taskId: this.model.cid,
      showHR: showHR
    };

    var pageTemplate = _.template(template())({data: data});

    console.log('lgfd');

    this.$el.html(pageTemplate);
    this.input = this.$('.task-name');
    this.checkbox = this.$('.status-checkbox');
    this.label = this.$('label');
    this.input.hide();

    return this.el;

  },

  update: function () {
    console.log('Task View Update');
    this.label.html(this.model.get('taskName'));
  },

  setVisible: function (val) {

    if (val) {
      this.$el.show();
    } else {
      this.$el.hide();
    }

  },

  onStatusClicked: function () {

    console.log('TaskDisplayView onStatusClicked');
    this.model.set({status: this.checkbox.val()});
    Backbone.history.loadUrl(Backbone.history.fragment);
  },

  onTaskClicked: function () {
    console.log('TaskDisplayView onTaskClicked');
    console.log(this.input);
    this.input.show();
    this.input.focus();
    this.label.hide();
  },

  onTaskBlur: function () {

    this.model.set('taskName', this.input.val());
    this.input.hide();
    this.label.show();
    console.log(this.model);
  },

  onDeleteButtonClicked: function () {

    this.collection.remove(this.model);
  }

});

module.exports = TaskDisplayView;
