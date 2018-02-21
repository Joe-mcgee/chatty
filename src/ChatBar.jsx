import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const onSubmit = (event) => {
      event.preventDefault();
      const content = event.target.elements.messageContent;
      let contentTest = content.value.split(' ');
      const imageTest = new RegExp('.(jpg|png|gif)$')
      const photos = [];
      contentTest.forEach((word) => {
        if (imageTest.test(word)) {
          photos.push(word)
        }
      })
      const newContent = contentTest.join(' ');
      let user = event.target.elements.currentUser.value;
      const color = this.props.currentColor
      if (!user) {
        user = this.props.currentUser.name
      }
      if (!content.value) {
        this.props.changeUser(user)
      } else {
        this.props.addMessage(user, newContent, color, photos)
      }
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

ChatBar.propTypes = {
  currentUser: PropTypes.object,
  changeUser: PropTypes.func,
  addMessage: PropTypes.func,
  currentColor: PropTypes.object,
}
export default ChatBar;
