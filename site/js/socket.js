define(['socketio','config'],function(io,config){
  var socket = io.connect(config.server_address);
  return socket; 
});
