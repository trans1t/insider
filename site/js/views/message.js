define(['marionette','hbs!tpl/message'],function(Marionette,tpl) {
  return Marionette.ItemView.extend({
    template: tpl
  });
});
