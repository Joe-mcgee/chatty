import React, {Component} from 'react';
import Image from './Image.jsx';

class ImageList extends Component {
  render() {
    const imageList = this.props.photos.map((photo) => {
      return (<Image key={this.props.id} photo={photo} />)
    })
    return (
      <div className='photos'>
      {imageList}
      </div>
      )
  }
}

export default ImageList
