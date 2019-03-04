import React, { Component, Fragment } from 'react';
import './style.css';

class SocialMediaLink extends Component {
  render() {
    const { url, children } = this.props;
    return (
      <Fragment>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      </Fragment>
    );
  }
}

export default SocialMediaLink;
