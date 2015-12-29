import React, { Component } from 'react';
import './App.scss';
import Version from '../Version/Version.js';

// --------------------------------------------------------------------------
// Tip:
//
// Webpack is going to read this file during each build and store the JSON
// into the variable appInfo. Webpack also wraps each module so no globals leak
// out, meaning `appInfo` will be a private variable available to the Component
// at runtime. If you ran this with `npm start`, you can go edit that file
// right now and the value will change in the browser.
// --------------------------------------------------------------------------
const appInfo = require('../../../package.json');

export default class App extends Component {
  // --------------------------------------------------------------------------
  // Tip:
  //
  // It is good practice to always call the parent/super class contructor
  // to pass along props (even if you don't have any right now).
  // --------------------------------------------------------------------------
  constructor(props) {
    super(props);
  }

  getPackageVersion() {
    return appInfo.version;
  }

  // --------------------------------------------------------------------------
  // Tip:
  //
  // A render method is all you technically need to render a Component.
  // You have access to the rest of the class with `this`.
  // --------------------------------------------------------------------------
  render() {
    return (
      <div>
        <h1>Hello from App</h1>
        <hr/>
        <Version version={this.getPackageVersion()}/>
      </div>
    );
  }
}
