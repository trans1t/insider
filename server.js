/*
 * here's the express server which runs the api, communicating with 
 * mongodb to make things permanent
 *
 */

var express = require('express'),
    app = express().listen(3000),
    io = require('socket.io').listen(app);

//fire up the webserver
app.listen(3000, function() {
  console.log("Listening on 3000");
});

//store current status and stream address
var status = {
  one: "We're up and running",
  two: "Set your status now",
  live: false,
  stream: ''
};

//stores the latest 10 chat messages
var messages = [
  {
    author: "Joe",
    message: "Derpy derp",
    time: "1pm"
  },
  {
    author:"Fred",
    message: "Herpy derr",
    time: "2pm"
  }
];

io.sockets.on('connection', function (socket) {

  socket.on('status', function() {
    socket.emit('status',status);
  });

  socket.on('status_update', function(data) {
    status = data;
    io.sockets.emit('status',status);
  });

  //receive a message and broadcast it
  socket.on('message', function(data) {
    storeMessage(data);    
    io.sockets.emit('message',data);
  });

  //get a list of latest 10 messages
  socket.on('messages', function() {
    socket.emit('messages',messages);
  });
});

function storeMessage(msg) {
  messages.unshift(msg);
  if (messages.length > 10)
    messages.splice(messages.length-1,1);
}
