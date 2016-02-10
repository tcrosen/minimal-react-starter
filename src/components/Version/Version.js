import React, { Component } from 'react';
import './Version.scss';

export default class Version extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // --------------------------------------------------------------------------
    // Tip:
    //
    // This technique is called destructuring. It is specially useful for declaring
    // which properties you expect to use from an object (in this case `this.props`).
    // It also saves you from having to litter your HTML with `this.props.whatever`.
    //
    // Destructuring is new to JS in ES2015 (ES6), but React has
    // a similar implementation built-in to the JSX compiler.  While it may seem
    // verbose, it is a very powerful syntax. The results quickly pay off when you
    // accept it as a new part of your coding arsenal.
    //
    // Another example:
    //
    // const person = { name: 'Terry', address: '123 Main St', city: 'Toronto' }
    // const { name, city } = person
    //
    // <div>Name: {name} is from {city}</div>
    // --------------------------------------------------------------------------
    const { version } = this.props;

    return (
      <div className="Version">
        Version: {version}
      </div>
    );
  }
}
