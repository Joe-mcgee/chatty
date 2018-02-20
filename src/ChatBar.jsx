import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const onSubmit = (event) => {
      event.preventDefault();
      const content = event.target.elements.messageContent;
      let user = event.target.elements.currentUser.value;
      if (!user) {
        user = this.props.currentUser.name
      }
      console.log(user)
      this.props.addMessage(user, content.value)


    }
    return (
      <form onSubmit={onSubmit}>
    <footer className='chatbar'>
      <input className='chatbar-username' name='currentUser' placeholder={this.props.currentUser.name} />
      <input className='chatbar-message' name='messageContent' placeholder='type a message and hit ENTER' />
      <input type='submit' style={{visibility: 'hidden'}} />
    </footer>
    </form>
    );
  }
}

export default ChatBar;
