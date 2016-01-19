'use strict';

var config = require('./config');
var Backbone = require('backbone') ;
var Router = require('./router/Router');
var App = require('./app');
//----------------------------------------

window.app = new App() ;

window.router = new Router() ;
Backbone.history.start() ;
