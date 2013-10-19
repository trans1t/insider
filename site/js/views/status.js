define(['marionette','hbs!tpl/status'], function(Marionette,tpl) {
  return Marionette.ItemView.extend({
    initialize: function() {
      this.listenTo(this.model,'change',this.render)
    },
    el: '#content',
    template: tpl,
    events: {
      'click #play-control': 'play',
    },
    play: function(e) {
      console.log('play clicked');
      console.log(this);
      if ($('#play-control').hasClass('playing')) { 
        $('audio')[0].pause();
        $('#play-control').removeClass('playing').html("&#9654;");
      } else {
        $('audio')[0].play();
        $('#play-control').addClass('playing').html("&#8214;");
      }
    }
  });
});
