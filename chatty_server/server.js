const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const uuidv1 = require('uuid/v1');

const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// https://codereview.stackexchange.com/questions/108130/generating-a-random-hex-color
function getRandomColor() {
  let length = 6;
  // BCDEF Lopped off to prevent colors too light for white background
  const chars = '0123456789A';
  let hex = '#';
  while (length--) hex += chars[(Math.random() * 11) | 0];
  return hex;
}

// instantiates a broadcast method that applies a send to all clients
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

app.use((req, res) => {
  res.send({ msg: 'hello' });
});
wss.on('connection', (ws) => {
  // send a unique, random color, to each new web socket connection
  ws.send(JSON.stringify({ type: 'color', color: getRandomColor() }));
  // broadcasts the number of people with an open websocket connection
  wss.broadcast(JSON.stringify({ type: 'count', lobbySize: wss.clients.size }));
  // handles messages sent from clients
  ws.on('message', (message) => {
    let messageObj = JSON.parse(message);
    // create a unique id for each message
    messageObj['id'] = uuidv1();
    switch (messageObj.type) {
      case 'postNotification':
        messageObj['type'] = 'incomingNotification';
        break;
      case 'postMessage':
        messageObj['type'] = 'incomingMessage';
        break;
    }

    const messageJson = JSON.stringify(messageObj);
    wss.broadcast(messageJson);
  });

  ws.on('close', () => {
    // updates users online when a client leaves socket
    wss.broadcast(JSON.stringify({ type: 'count', lobbySize: wss.clients.size }));
  });
});

server.listen(3001, () => {
});
