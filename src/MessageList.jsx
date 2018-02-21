import React, {Component} from 'react';
import Message from './Message.jsx';
import MessageNotification from './MessageNotification.jsx';
import PropTypes from 'prop-types';

class MessageList extends Component {
  render() {
    const messageList = this.props.messages.map((message) => {
      return (<Message key={message.id} message={message} />);
    });

    const notificationList = this.props.notifications.map((notification) => {
      return (<MessageNotification key={notification.id} content={notification.content} />);
    });
  return (
    <main className="messages">
    {messageList}
    {notificationList}
    </main>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.object,
  notifications: PropTypes.object
};

export default MessageList;
