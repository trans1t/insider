/*
 * here's the express server which runs the api, communicating with 
 * mongodb to make things permanent
 *
 */

var express = require('express'),
    app = express().listen(3000),
    io = require('socket.io').listen(app);

    /*
    path = require('path'),
    mongoose = require('mongoose').connect('mongodb://localhost/insider'),
    application_root = __dirname;
    */

/*
app.configure( function() {
  app.use(express.static(path.join(application_root,'site')));
  app.use(express.bodyParser()); //POST SUPPORT
  app.use(express.methodOverride()); //PUT SUPPORT
});
*/

// fire up the server
    //
app.listen(3000, function() {
  console.log("Listening on 3000");
});

var status = {
  one: "OK",
  two: "",
  live: false,
  stream: ''
};

io.sockets.on('connection', function (socket) {
  socket.on('status', function() {
    socket.emit('status',status);
  });
  socket.on('status_update', function(data) {
    status = data;
    io.sockets.emit('status',status);
  });
});

/*
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


//here's the api
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

*/

