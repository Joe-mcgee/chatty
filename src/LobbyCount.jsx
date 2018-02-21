import React, {Component} from 'react';

class LobbyCount extends Component {
  render() {
    return (
      <div className='lobby-count'>
        <h3> {this.props.count} users online </h3>
      </div>
      )
  }
}

export default LobbyCount
