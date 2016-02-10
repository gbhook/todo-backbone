'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');

var FooterView = Backbone.View.extend({

  events: {
    'click button': 'deleteCompleted'
  },

  initialize: function () {
    this.listenTo(this.collection, 'add', this.render);
    this.listenTo(this.collection, 'change', this.render);
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function () {

    var tasksLeft = this.collection.where({status: false}).length;
    var pageTemplate = _.template(template())({tasksLeft: tasksLeft});
    this.$el.html(pageTemplate);

  },

  deleteCompleted: function () {

    console.log('Delete Completed');
    this.collection.each(function (model) {
      if (model.get('status')) {
        this.collection.remove(model);
      }
    }, this);

  }

});

module.exports = FooterView;
