'use strict';

var app = app||{} ;

var Backbone = require('../vendor/backbone-min') ;

var TodoRouter = Backbone.Router.extend({

  initialize:function(collection){
    this.collection=collection ;
  },


  routes:{
    'filter/*filter':'filterByStatus'
  },
  collection:{},
  filterByStatus:function(param){

    console.log("Param= " + param);

    this.collection.trigger('filter', param) ;

  }

});

module.exports = TodoRouter ;
