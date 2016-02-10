'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var TaskDisplayView = Backbone.View.extend({

  tagName: 'li',

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

    var data = {
      taskStatus: this.model.attributes.status,
      taskName: this.model.attributes.taskName,
      taskId: this.model.cid
    };

    var pageTemplate = _.template(template())({data: data});

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

    console.log('on task blur');

    this.model.set('taskName', this.input.val());
    this.input.hide();
    this.label.show();
    console.log(this.model);
  },

  onDeleteButtonClicked: function () {
    console.log('on DELETE CLICKED');
    this.collection.remove(this.model);
  }

});

module.exports = TaskDisplayView;
