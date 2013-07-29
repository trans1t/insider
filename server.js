/*
 * here's the express server which runs the restful api, communicating with 
 * mongodb to make things permanent
 *
 */

var express = require('express'),
    mongoose = require('mongoose');

/* the following API is standard REST, no description necessary really */
// sets api - an individual 'performance'
app.get('/sets',function(req,res) {
    
});
app.get('/sets/:id',function(req,res) {

});
app.put('/sets/:id',function(req,res) {

});
app.post('/sets',function(req,res) {

});

// shows api - a group of performances
app.get('/shows',function(req,res) {
  
});
app.get('/shows/:id',function(req,res) {

});
app.put('/shows/:id',function(req,res) {

});
app.post('/shows',function(req,res) {

});

// fire up the server
app.listen(3000, function() {
  mongoose.connect('mongodb://localhost/insider');
  console.log("Listening on 30000");
}
