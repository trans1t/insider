define([
         'backbone',
         'socket',
         'models/status',
         'views/status',
         'views/admin',
       ], function(Backbone,socket,Status,StatusView,AdminView) {

  return Backbone.Router.extend({

    routes: {
      '': 'home',
      'admin': 'admin'
    },

    home: function() {
      var status = new Status();
      var statusView = new StatusView({model: status}).render();

      console.log("binding");
      socket.on('status',function(data) {
        status.set(data);
      });
      socket.emit('status');
    },

    admin: function() {
      var status = new Status();
      var adminView = new AdminView({model: status}).render();
    }


  });

});
