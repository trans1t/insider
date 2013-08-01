var app = app || {};

$(function() {
  var shows = new app.Shows();
  shows.fetch();
  //new app.ShowsView();

  //if there's a show happening right now, show the now playing thing
  
  //otherwise show the next show
  //


  $('#main').backstretch('img/bg.png');
});
