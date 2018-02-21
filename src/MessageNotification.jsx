import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MessageNotification extends Component {
  render () {
    return (
    <div className='message system'>
      <p>{this.props.content}</p>
    </div>
    )
  }
}

MessageNotification.propTypes = {
  content: PropTypes.string
}

export default MessageNotification
