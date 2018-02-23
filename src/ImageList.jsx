import React, {Component} from 'react';
import Image from './Image.jsx';
import PropTypes from 'prop-types';
const uuidv1 = require('uuid/v1');

class ImageList extends Component {
  render() {
    const imageList = this.props.photos.map((photo) => {
      return (<Image key={uuidv1()} photo={photo} style={{'max-width': '60%'}} />);
    });
    return (
      <div className='photos'>
      {imageList}
      </div>
      );
  }
}

ImageList.propTypes = {
  photos: PropTypes.array,
  imageList: PropTypes.func,
  id: PropTypes.string
};

export default ImageList;
