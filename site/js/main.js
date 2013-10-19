requirejs.config({
  paths: {
    jquery: 'lib/jquery',
    socketio: 'lib/socket.io',
    underscore: 'lib/underscore',
    marionette: 'lib/backbone.marionette',
    backbone: 'lib/backbone',
    'backbone.wreqr': 'lib/backbone.wreqr',
    'backbone.babysitter': 'lib/backbone.babysitter',
    bootstrap: 'lib/bootstrap',
    json2: 'lib/json2',
    i18nprecompile: 'lib/i18nprecompile',
    hbs: 'lib/hbs',
    Handlebars: 'lib/handlebars',
    backstretch: 'lib/jquery.backstretch.min'
  },
  shim: {
    jquery: {
      exports: 'jQuery'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },
    "backbone.wreqr": {
      deps: ['backbone'],
    },
    "backbone.babysitter": {
      deps: ['backbone'],
    },
    bootstrap: {
      deps: ['jquery']
    },
    backstretch: {
      deps: ['jquery']
    }
  },
  hbs: {
    disableI18n: true,
  }
});

define(['marionette','router','backstretch','app'],function(Marionette,Router,backstretch,app) {
  app.router = new Router();
  Backbone.history.start({pushState: true});
  $('#main').backstretch('img/bg.png');
});
