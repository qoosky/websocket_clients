require('ssl-root-cas').addFile(__dirname + '/../qoosky-ca-root.crt'); // 方法1
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0'; // 方法2

var ws = new require('ws')('wss://api.qoosky.net/v1/controller/actuator/ws');

ws.on('open', function(){
  console.log("Successfully connected to the API server.")
  ws.send('{"token":"XXXX-XXXX-XXXX-XXXX"}');
});

ws.on('error', function(err){
  console.log("An unexpected error has occurred: " + err);
});

ws.on('message', function(data){
  console.log("received: " + data);
});

ws.on('close', function(){
  console.log("Connection closed.");
});