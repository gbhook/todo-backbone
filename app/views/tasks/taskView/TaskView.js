'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var template = require('./template.html');
var TaskDisplayView = require('../taskDisplay/TaskDisplayView');

var TaskView = Backbone.View.extend({

  taskName:null,

  initialize: function() {


    this.taskLi = document.createElement('li') ;
    this.$el.append(this.taskLi) ;
    this.display = new TaskDisplayView({el:this.taskLi}) ;

  },

  render:function() {
    console.log(this.taskName);
    this.display.taskName = this.taskName;
    this.display.render() ;

  }

});

module.exports = TaskView ;
