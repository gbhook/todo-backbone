'use strict';

var config = require('./config');
var Backbone = require('backbone') ;
var Router = require('./router/Router');




var router = new Router() ;
Backbone.history.start() ;
console.log(config);
