import React, { Component } from 'react';
import { processImage } from '../model/ImageProcessor'
import ReactDOM from 'react-dom';

//
// File Upload Snippet from
// https://codepen.io/hartzis/pen/VvNGZP
// 
//

export default class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        file: '',
        imagePreviewUrl: ''
      };
      this.baseState = this.state;
      this._handleImageChange = this._handleImageChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      processImage(this.state.file);
    }

    removeImage = () => {
      this.setState(this.baseState);
    }

    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }

      reader.readAsDataURL(file)
    }

    render() {
      let { imagePreviewUrl } = this.state;
      let imagePreview = null;
        
      if (imagePreviewUrl) {
        imagePreview = (<img src={imagePreviewUrl} ref="ImageInput" height="300" width="300" className="center"/>);
      }

      return (
        <div>
          <form onSubmit={this._handleSubmit}>
            {imagePreview}
            <input type="file" onChange={this._handleImageChange} />
            <button type="submit" onClick={this._handleSubmit}>Upload Image</button>
            <button type="button" onClick={this.removeImage}>
              Reset Image
            </button>
          </form>
          
        </div>
      )
    }
  }
