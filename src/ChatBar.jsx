import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const onSubmit = (event) => {
      event.preventDefault();
      const content = event.target.elements.messageContent;
      const user = this.props.currentUser.name
      this.props.addMessage(user, content.value)

    }
    return (
      <form onSubmit={onSubmit}>
    <footer className='chatbar'>
      <input className='chatbar-username' placeholder={this.props.currentUser.name} />
      <input className='chatbar-message' name='messageContent' placeholder='type a message and hit ENTER' />
      <input type='submit' style={{visibility: 'hidden'}} />
    </footer>
    </form>
    );
  }
}

export default ChatBar;
