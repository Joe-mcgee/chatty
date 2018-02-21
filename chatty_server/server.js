/*// server.js

const express = require('express');
const SocketServer = require('ws').Server;

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  wss.on('close', () => console.log('Client disconnected'));
});*/


const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const uuidv1 = require('uuid/v1');

const app = express();

// https://codereview.stackexchange.com/questions/108130/generating-a-random-hex-color
function getRandomColor() {
  var length = 6;
  var chars = '0123456789ABCDEF';
  var hex = '#';
  while(length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}


app.use((req, res) => {
  res.send({msg: 'hello'});
});

const server = http.createServer(app);
const wss = new WebSocket.Server( { server } );
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  ws.send(JSON.stringify({type: 'color', color: getRandomColor()}))
  wss.broadcast(JSON.stringify({type: 'count', lobbySize: wss.clients.size}));
  ws.on('message', (message) => {
    let messageObj = JSON.parse(message);
    messageObj['id'] = uuidv1();
    console.log(messageObj.type)
    switch (messageObj.type) {
      case 'postNotification':
        messageObj['type'] = 'incomingNotification';
        break;
      case 'postMessage':
        messageObj['type'] = 'incomingMessage';
        break;
    }
    let messageJson = JSON.stringify(messageObj);
    wss.broadcast(messageJson);

  });

  console.log('Client Connected');

ws.on('close', () => {

  wss.broadcast(JSON.stringify({type: 'count', lobbySize: wss.clients.size}));
  console.log('Client disconnected');


});
});




server.listen(3001, () => {
  console.log('listening on port 3001');
});
