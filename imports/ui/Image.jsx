import React, { Component } from 'react';

export default class Image extends Component {
  
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
  
}