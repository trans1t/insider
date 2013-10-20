define(['marionette','views/message','hbs!tpl/messages','app','socket'],
       function(Marionette,Message,tpl,app,socket) {
  return Marionette.CompositeView.extend({
    el: '#chat',
    itemView: Message,
    itemViewContainer: 'dl',
    template: tpl,
    events: {
      'keydown #nickname': 'nickname',
      'keydown #chatbox': 'chat'
    },
    onRender: function(e) {
      if(app.nickname)
        $('#nickname').remove();
    },
    nickname: function(e) {
      if (e.keyCode == 13) {
        console.log("enter");
        app.nickname = $('#nickname').val();
        $('#nickname').hide();
        $('#nickname').remove();
        $('#chatbox').show();
      }
    },
    chat: function(e) {
      if (e.keyCode == 13) {
        console.log(app.nickname);
        var message = $('#chatbox').val();
        $('#chatbox').val('');
        socket.emit('message',{
          author: app.nickname,
          message: message,
          time: "today"
        });
      }
    }
  });
});
