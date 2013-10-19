define([
         'marionette',
         'app',
         'hbs!tpl/admin'
       ], function(Marionette,app,tpl) {

  return Marionette.ItemView.extend({
    el: '#content',
    template: tpl,
    events: {
      "click button#submit": "statusUpdate",
      "click button.back": "back"
    },
    statusUpdate: function(e) {
      e.preventDefault();
      var vals = {
        one: $('#one').val(),
        two: $('#two').val(),
        live: $('#live').is(':checked'),
        stream: $('#stream').val()
      }
      this.model.set(vals);
      this.model.pushToServer();
      $('#form-status').show().html('Submitted').fadeOut(1000);
    },
    back: function(e) {
      app.router.navigate('');
    }
  });
});
