define([
         'backbone',
         'socket',
         'models/status',
         'views/status',
         'views/admin',
         'models/message',
         'coll/messages',
         'views/messages'
       ], function(
                    Backbone,
                    socket,
                    Status,
                    StatusView,
                    AdminView,
                    Message,
                    Messages,
                    MessagesView
                  ) {

  return Backbone.Router.extend({

    routes: {
      '': 'home',
      'admin': 'admin'
    },

    home: function() {
      var status = new Status();
      var statusView = new StatusView({model: status}).render();
      socket.on('status',function(data) {
        status.set(data);
      });
      //get the current status
      socket.emit('status');

      var messages = new Messages();
      var messagesView = new MessagesView({collection: messages}).render();
      socket.on('message',function(data) {
        messages.unshift(new Message(data));
        messagesView.render();
      });
      socket.on('messages',function(data) {
        console.log(data);
        _.each(data, function(item) {
          messages.unshift(new Message(item));
        });
      });
      socket.emit('messages');
    },

    admin: function() {
      var status = new Status();
      var adminView = new AdminView({model: status}).render();

      socket.on('status',function(data) {
        status.set(data);
      });
      //get the current status
      socket.emit('status');

    }

  });

});
