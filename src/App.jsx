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
      messages: []
    }
    this.addMessage = this.addMessage.bind(this)
  }

  componentDidMount() {
  console.log("componentDidMount <App />");

  this.socket.onopen = () => {
  console.log('connected to server')
}

  this.socket.onmessage = (event) => {
      const messageWId = JSON.parse(event.data)
      if (messageWId.username !== this.state.currentUser) {
        this.setState({currentUser: messageWId.username})
      }
      const messages = this.state.messages.concat(messageWId)
      console.log(messages)
      this.setState({messages: messages})
    }
 /* setTimeout(() => {
    console.log("Simulating incoming message");
    const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})
  }, 3000);*/
}

  addMessage(username, content) {
    const newMessage = {username: username, content: content}
    this.socket.send(JSON.stringify(newMessage))
  }

  render() {

    return (
      <div>
      <MessageList messages={this.state.messages} />
      <ChatBar currentUser={this.state.currentUser}  addMessage={this.addMessage} newUser={this.newUser}/>
      </div>
    );
  }
}
export default App;
