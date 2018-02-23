import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {

    return (
      <div>
        <img src={this.props.photo} style={{'max-width': '60%'}} />
      </div>
      );
  }
}
Image.propTypes = {
  photo: PropTypes.string
};
export default Image;
