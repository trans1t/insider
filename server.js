/*
 * here's the express server which runs the restful api, communicating with 
 * mongodb to make things permanent
 *
 */

var express = require('express'),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose').connect('mongodb://localhost/insider'),
    application_root = __dirname;

app.configure( function() {
  app.use(express.static(path.join(application_root,'site')));
  app.use(express.bodyParser()); //POST SUPPORT
  app.use(express.methodOverride()); //PUT SUPPORT
});

var db = mongoose.connection,
    Show;
db.on('error',console.error.bind(console,'conn error'));
db.once('open', function callback() {
  //set up the mongoose schema and model for a show
  var showSchema = mongoose.Schema({
    title: String,
    sets: [{ date: String, artist: String }]
  });
  Show = mongoose.model('Show',showSchema);
});


/* the following API is a standard restful one */
app.get('/shows',function(req,res) {
  Show.find(function(err,shows) {
    res.send(shows);
  });
});
app.get('/shows/:id',function(req,res) {
  return Show.findById(req.params.id, function(err, show) {
    if (!err) {
      return res.send(show);
    } else {
      return console.log(err);
    }
  });
});
app.put('/shows/:id',function(req,res) {
  return Show.findById(req.params.id, function(err, show) {
    show.title = req.body.title;

    return show.save( function(err) {
      if (!err) {
        console.log("updated");
      } else { 
        console.log(err);
      }
      return res.send(show);
    });
  });
});
app.post('/shows',function(req,res) {
  console.log(req.body);

  var show = new Show({
    title: req.body.title,
    sets: []
  });

  show.save( function(err) {
    if (!err) {
      return console.log('created show');
    } else {
      return console.log(err);
    }
  });
});


// fire up the server
app.listen(3000, function() {
  console.log("Listening on 30000");
});
