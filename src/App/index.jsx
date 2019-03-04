import React, { Component, Fragment } from 'react';
import Header from '../containers/Header';
import About from '../containers/About';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <About />
      </Fragment>
    );
  }
}

export default App;
