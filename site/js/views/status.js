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
    onRender: function() {
      console.log(this.model.get('stream'));
      var self=this;
      if (this.model.get('live')) {
      MRP.setElementId('player');
      MRP.insert({
        'url':this.model.get('stream'),
        'codec':'mp3',
        'volume':100,
        'autoplay':true,
        'buffering':5,
        'title':'insider.fm',
        'bgcolor':'#000',
        'skin':'mcclean',
        'width':180,
        'height':60
      });
      }
    }
  });
});
