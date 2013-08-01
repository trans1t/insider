var app = app || {};
var Router = Backbone.Router.extend({
  routes: {
    'test': 'doSomething'
  },

  doSomething: function(param) {
    //do something with the param
  }
});

app.ShowRouter = new Router;
Backbone.history.start();
