define(['marionette','hbs!tpl/status'], function(Marionette,tpl) {
  return Marionette.ItemView.extend({
    initialize: function() {
      this.listenTo(this.model,'change',this.render)
    },
    el: '#content',
    template: tpl,
    events: {
      'click #play-control': 'play',
      'play': 'debug',
    },
    play: function(e) {
      console.log('play clicked');
      console.log(this);
      if ($('#play-control').hasClass('playing')) { 
        $('audio').prop('src','');
        $('audio').prop('src',$('audio').attr('data-src'));
        $('#play-control').removeClass('playing').html("&#9654;");
      } else {
        $('audio')[0].play();
        $('#play-control').addClass('playing').html("&#9632;");
      }
    },
    debug: function(e) {
      console.log("DEBUG");
      console.log(e);
    }
  });
});
