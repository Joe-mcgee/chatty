import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LobbyCount extends Component {
  render() {
    return (
      <div className='lobby-count'>
        <h3> {this.props.count} users online </h3>
      </div>
      );
  }
}

LobbyCount.propTypes = {
  count: PropTypes.string
};

export default LobbyCount;
