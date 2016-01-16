import React from 'react';
import { render } from 'react-dom';
import a11y from 'react-a11y';
// Note: This is an intentionally verbose way of importing local files.
// It will be cleaned up in more advanced iterations of this project.
import App from './components/App/App.js';

// Enable accessibility warnings.
// Please leave this on in development and respectfully fix any problems.
a11y(React);

// --------------------------------------------------------------------------
// Tip:
//
// Note that the render() method was imported from react-dom
// instead of importing the entire libary like this:
//
// import ReactDOM from 'react-dom'
// ReactDOM.render(...)
//
// This is considered good practice with ES6 modules. It makes
// your code more declaritive for humans, and your build tools 
// can automatically perform enhancements like Tree Shaking 
// (http://www.2ality.com/2015/12/webpack-tree-shaking.html)
// --------------------------------------------------------------------------
render(
  <App />,
  document.getElementById('app')
);
