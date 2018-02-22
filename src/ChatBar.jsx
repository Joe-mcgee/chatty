import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
* Child Component
*/

class ChatBar extends Component {
  constructor(props) {
    super(props);
  }

/*Methods*/
  checkForPhotos(content) {
    const photos = [];
    const imageTest = new RegExp('.(jpg|png|gif)$');

    let contentTest = content.value.split(' ');
    contentTest.forEach((word) => {
      if (imageTest.test(word)) {
        photos.push(word);
      }
    });
    return photos

  }

  render() {
    const onSubmit = (event) => {
      event.preventDefault();
      const content = event.target.elements.messageContent;
      const color = this.props.currentColor;
      const photos = this.checkForPhotos(content);
      let user = event.target.elements.currentUser.value;

      if (!user) {
        user = this.props.currentUser.name;
      }

      if (!content.value || this.props.currentUser !== user) {
        this.props.changeUser(user);
      }
      if (content.value) {
        this.props.addMessage(user, content.value, color, photos);
      }
    };
    return (
      <form onSubmit={onSubmit}>
    <footer className='chatbar'>
      <input className='chatbar-username' name='currentUser' defaultValue={this.props.currentUser.name} />
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
};
export default ChatBar;
