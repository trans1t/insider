define(['marionette','hbs!tpl/admin'],function(Marionette,tpl) {
  return Marionette.ItemView.extend({
    el: '#content',
    template: tpl,
    events: {
      "click button": "statusUpdate"
    },
    statusUpdate: function(e) {
      e.preventDefault();
      var vals = {
        one: $('#one').val(),
        two: $('#two').val(),
        live: $('#live').is(':checked'),
      }
      console.log(vals);
      this.model.set(vals);
      this.model.pushToServer();

      $('#form-status').html('Submitted').fadeOut(1000);

    }
  });
});
