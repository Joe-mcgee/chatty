import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx';
/*const WebSocket = require('ws')*/

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001")
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      notifications: []
    }
    this.addMessage = this.addMessage.bind(this)
    this.changeUser = this.changeUser.bind(this)
  }

  componentDidMount() {
  console.log("componentDidMount <App />");

  this.socket.onopen = () => {
  console.log('connected to server')
}

  this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      switch(data.type) {
        case 'incomingNotification':

          this.setState({currentUser: {name: data.username}})
          const notifications = this.state.notifications.concat(data)
          this.setState({notifications: notifications})
          break;
        case 'incomingMessage':

          const messages = this.state.messages.concat(data)
          this.setState({messages: messages})


          break
      }
    }
 /* setTimeout(() => {
    console.log("Simulating incoming message");
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }, 3000);*/
}

  addMessage(username, content) {
    const newMessage = {type:'postMessage', username: username, content: content}
    this.socket.send(JSON.stringify(newMessage))
  }

  changeUser(newUser) {
    const old = this.state.currentUser['name'];
    const newChange = {type: 'postNotification', username: newUser, content: `${old} has changed their name to ${newUser}`}
    this.socket.send(JSON.stringify(newChange))

  }


  render() {

    return (
      <div>
      <MessageList messages={this.state.messages} notifications={this.state.notifications} />
      <ChatBar currentUser={this.state.currentUser} changeUser={this.changeUser}  addMessage={this.addMessage} newUser={this.newUser}/>
      </div>
    );
  }
}
export default App;
