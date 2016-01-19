'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;
var PageOneView = require('../views/pageOne/PageOneView');
var PageTwoView = require('../views/pageTwo/PageTwoView');

var Router = Backbone.Router.extend({

  initialize: function() {

    this.pageOne = new PageOneView({el:$('#main-content')});
    this.pageTwo = new PageTwoView({el:$('#main-content')});
  },

  routes: {
    'page/:page': 'gotoPage'
  },

  gotoPage: function(page) {
    console.log('GoTo=' + page) ;

    switch (page) {
      case '1' :
        this.pageOne.render();
        break ;
      case '2' :
        this.pageTwo.render();
        break ;
    }

  }
}) ;

module.exports = Router ;
