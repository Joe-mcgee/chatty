import React, {Component} from 'react';
import Image from './Image.jsx';
import PropTypes from 'prop-types';

class ImageList extends Component {
  render() {
    const imageList = this.props.photos.map((photo) => {
      return (<Image key={this.props.id} photo={photo} />);
    });
    return (
      <div className='photos'>
      {imageList}
      </div>
      );
  }
}

ImageList.propTypes = {
  photos: PropTypes.string,
  imageList: PropTypes.func,
  id: PropTypes.string
};

export default ImageList;
