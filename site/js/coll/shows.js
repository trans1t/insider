var app = app || {};

app.Shows = Backbone.Collection.extend({
  model: app.Show,
  url: '/shows'
});
