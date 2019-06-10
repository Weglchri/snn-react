import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';
import ReactDOM from 'react-dom';


import Task from './Task.jsx';
import Image from './Image.jsx';
import TextComponent from './TextComponent';
import ImageUpload from './ImageUpload.jsx';


// App component - represents the whole app
class App extends Component {

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    console.log(text);

    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  renderImage() {
    return this.props.tasks.map((task) => (
      <Image key={task._id} task={task} />
    ));
  }



  render() {
    return (
            <div>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="description" content="A front-end template that helps you build fast, modern mobile web apps." />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
              {/* Add to homescreen for Chrome on Android */}
              <meta name="mobile-web-app-capable" content="yes" />
              {/* Add to homescreen for Safari on iOS */}
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="black" />
              <meta name="apple-mobile-web-app-title" content="Material Design Lite" />
              {/* Tile icon for Win8 (144x144 + tile color) */}
              <meta name="msapplication-TileImage" content="images/touch/ms-touch-icon-144x144-precomposed.png" />
              <meta name="msapplication-TileColor" content="#3372DF" />
              <link rel="shortcut icon" href="images/tensor.png" />
              {/* SEO: If your mobile URL is different from the desktop URL, add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones */}
              {/*
          <link rel="canonical" href="http://www.example.com/">*/}
              <link rel="stylesheet" href="main.css" type="text/css" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en" />
              <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
              <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.cyan-light_blue.min.css" />
              <style dangerouslySetInnerHTML={{__html: "\n    #view-source {\n      position: fixed;\n      display: block;\n      right: 0;\n      bottom: 0;\n      margin-right: 40px;\n      margin-bottom: 40px;\n      z-index: 900;\n    }\n    " }} />
              <div className="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
                <header className="demo-header mdl-layout__header mdl-color--grey-100">
                  <span className="title_text">Cats & Dogs DL Project</span> 
                </header>
                <div className="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900">
                  <header className="demo-drawer-header">
                    <div className="icon_header">
                      <img src="images/tensor.png" className="demo-avatar" />
                    </div>
                  </header>
                  {/* navigation left hand side */}  
                  <nav className="demo-navigation mdl-navigation">
                    <a className="mdl-navigation__link" href="https://www.javascript.com/"> 
                      <img className="icons" src="images/js.png" /> 
                      <span className="icon_text">JAVASCRIPT</span>
                    </a>
                    <a className="mdl-navigation__link" href="https://reactjs.org/"> 
                      <img className="icons" src="images/ang.png" /> 
                      <span className="icon_text">REACT</span>
                    </a>
                    <a className="mdl-navigation__link" href="https://www.tensorflow.org/js"> 
                      <img className="icons" src="images/ten.png" /> 
                      <span className="icon_text">TENSORFLOW</span>
                    </a>
                    <a className="mdl-navigation__link" href="https://www.mongodb.com/"> 
                      <img className="icons" src="images/mong.png" /> 
                      <span className="icon_text">MONGODB</span>
                    </a>
                  </nav>
                </div>
                {/* main content */}
                <main className="mdl-layout__content mdl-color--grey-100">
                  <div className="mdl-grid demo-content">
                    <div className="demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid">
                      <svg fill="currentColor" width="200px" height="200px" className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop">
                        <p> Hello World</p>
                      </svg>
                      <div fill="currentColor" className="demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop" />
                    </div>
                    <div id="imageContainer" className="demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col">
                      <ImageUpload  />
                    </div>
                    {/* right hand side */}
                    <div className="demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing">
                      <div className="demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop">
                        <div className="mdl-card__title mdl-color--orange-500 mdl-card--expand mdl-color--teal-300">
                          <h2 className="mdl-card__title-text">Tensorflow</h2>
                        </div>
                        <div className="mdl-card__supporting-text mdl-color-text--grey-600">
                          Tensorflow.js and how to use it ;)
                        </div>
                        <div className="mdl-card__actions mdl-card--border">
                          <a href="https://www.tensorflow.org/js/guide/nodejs" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read More</a>
                        </div>
                      </div>
                      <div className="demo-separator mdl-cell--1-col" />
                      <div className="demo-options mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop">
                      </div>
                    </div>
                  </div>
                </main>
              </div> 
              <footer className="footer">
                  <span className="footer_text" >Wegl Christopher | FH Joanneum Projekt</span> 
                </footer>
            </div> 
    );
  }
}

export default withTracker(() => {
  return {};
})(App);