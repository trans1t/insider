define(['marionette','socket'],function(Marionette,socket) {
  return Backbone.Model.extend({
    pushToServer: function() {
      console.log('sending...');
      console.log(this.get('one'));
      socket.emit('status_update',{
        one: this.get('one'),
        two: this.get('two'),
        live: this.get('live')
      });
    }
  });
});
