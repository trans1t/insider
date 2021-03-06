define(['marionette','views/message','hbs!tpl/messages','app','socket'],
       function(Marionette,Message,tpl,app,socket) {
  return Marionette.CompositeView.extend({
    el: '#chat',
    itemView: Message,
    itemViewContainer: 'dl',
    template: tpl,
    events: {
      'keydown #nickname': 'nickname',
      'keydown #chatbox': 'chat',
      'click .enable': 'hide'
    },
    onBeforeRender: function(e) {
      app.prevmsg = $('#chatbox').val();
    },
    onRender: function(e) {
      if (app.prevmsg) {
        $('#chatbox').val(app.prevmsg);
        app.prevmsg = null;
      }

      if(app.nickname) {
        $('#nickname').remove();
        $('#chatbox').focus();
      } else {
        $('#nickname').focus();
      }
    },
    nickname: function(e) {
      if (e.keyCode == 13) {
        app.nickname = $('#nickname').val();
        $('#nickname').hide().remove();
        $('#chatbox').show().focus();
      }
    },
    chat: function(e) {
      if (e.keyCode == 13) {
        var message = $('#chatbox').val();
        $('#chatbox').val('');
        socket.emit('message',{
          author: app.nickname,
          message: message,
          time: "today"
        });
      }
    },
    hide: function(e) {
      console.log($('#messages').is(':visible'));
      if ($('#messages').is(':visible'))
        $('.enable').html('show chat')
      else 
        $('.enable').html('hide chat')

      $('#messages').animate({width:'toggle'}); 
    }

  });
});
