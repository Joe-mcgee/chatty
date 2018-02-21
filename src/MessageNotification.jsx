import React, {Component} from 'react';

class MessageNotification extends Component {
  render () {
    return (
    <div className='message system'>
      <p>{this.props.content}</p>
    </div>
    )
  }
}

export default MessageNotification
