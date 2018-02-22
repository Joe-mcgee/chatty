# Chatty
A Client Side group chat application built with React utilizing Web Sockets

![one](https://github.com/Joe-mcgee/chatty/blob/master/screenshots/one.jpg)
![two](https://github.com/Joe-mcgee/chatty/blob/master/screenshots/2.jpg)
![three](https://github.com/Joe-mcgee/chatty/blob/master/screenshots/3.jpg)
![four](https://github.com/Joe-mcgee/chatty/blob/master/screenshots/4.jpg)

## Getting Started

This version was built with
  -[npm](https://www.npmjs.com/)
  -[nodejs](https://nodejs.org/en/)
  -[express](https://expressjs.com/)
  -[babel](https://babeljs.io/)
  -[css-loader](https://github.com/webpack-contrib/css-loader)
  -[node-sass](https://github.com/sass/node-sass)
  -[sockjs-client](https://github.com/sockjs/sockjs-client)
  -[style-loader](https://github.com/webpack-contrib/style-loader)
  -[webpack](https://webpack.js.org/)
  -[prop-types](https://www.npmjs.com/package/prop-types)
  -[react](https://reactjs.org/)
  -[uuid](https://www.npmjs.com/package/uuid)
  -[ws](https://www.npmjs.com/package/ws)

  
To Install
1. Clone this repo onto your machine
2. This folder contains two servers, so first cd into its root and run
  `npm init`
  - This will init the chatty server, to initialize full capability
3. cd into /chatty_server and
  `npm init`
  -this will initialize the websocket server

4. in two separate terminal windows, one for the root and /chatty_server, run
  `npm start`
  - each will start their respective servers

5. open localhost:3000 on as many windows you want and start chatting!

### How to Use

Remain Anonymous or append a username, simple type it into the left field and add your text in the right!  

One can insert a picture if they copy paste a jpg, gif or png into the text field.

#### Features for Next Version
- Add a database to save conversations
- more picture support
- usernames for repeat users
