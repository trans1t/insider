define(['marionette','hbs!tpl/status'], function(Marionette,tpl) {
  return Marionette.ItemView.extend({
    initialize: function() {
      this.listenTo(this.model,'change',this.render)
    },
    el: '#content',
    template: tpl,
    events: {
      'click #play-control': 'playAudio'
    },
    playAudio: function(e) {
      if ($('#play-control').hasClass('playing')) { 
        $('audio')[0].pause();
        $('audio').removeAttr('src');
        $('audio').attr('src',$('audio').attr('data-src'));
        $('#play-control').removeClass('playing')
                          .removeClass('btn-danger')
                          .addClass('btn-success')
                          .html("&#9654;");
      } else {
        $('audio')[0].play();
      }
    },
    loadingAudio: function() {
      console.log("LOADING");
      $('#play-control').removeClass('btn-success')
                        .addClass('btn-warning')
                        .html('&#9203;');
    },
    playingAudio: function() {
      console.log("PLAYING");
      $('#play-control').addClass('playing')
                        .removeClass('btn-success')
                        .removeClass('btn-warning')
                        .addClass('btn-danger')
                        .html("&#9632;");
    },
    error: function() {
      $('#play-control').removeClass('btn-success')
                        .removeClass('btn-danger')
                        .addClass('btn-warning')
                        .addClass('playing')
                        .html("&#10226;")
    },
    onRender: function() {
      var self=this;
      $('audio').on('play',function(e) { self.loadingAudio() });
      $('audio').on('playing',function(e) { self.playingAudio() });
      $('audio').on('error',function(e) { self.error() });
      $('audio').on('ended',function(e) { console.log("ended");self.error() });
      $('audio').on('progress',function(e) { console.log("progress") });
    }
  });
});
