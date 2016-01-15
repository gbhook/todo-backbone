'use strict' ;

var Backbone = require('backbone');
var $ = require('jquery') ;

var Router = Backbone.Router.extend({

  routes: {
    'page/:page': 'gotoPage'
  },

  gotoPage: function(page) {
    console.log('GoTo=' + page) ;

    var newUrl ;

    switch (page) {
      case '1' :
        newUrl = 'pages/pageOne.html' ;
        break ;
      case '2' :
        newUrl = 'pages/pageTwo.html' ;
        break ;
    }

    $('#main-content-iframe').attr('src', newUrl) ;

  }
}) ;

module.exports = Router ;
