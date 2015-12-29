import React, { Component } from 'react';
import './Version.scss';

export default class Version extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Version">
        Version: {this.props.version}
      </div>
    );
  }
}
