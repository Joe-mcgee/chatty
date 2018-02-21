import React, {Component} from 'react';
import ImageList from './ImageList.jsx';

class Message extends Component {
  render() {
    return (
    <div className="message">
      <span className="message-username" style={this.props.message.color}>{this.props.message.username}</span>
      <span className="message-content">
      {this.props.message.content}
      <ImageList id={this.props.message.id} photos={this.props.message.photos} />

      </span>
    </div>
    );
  }
}

export default Message
