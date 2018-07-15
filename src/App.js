import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BasicGrid from './Components/BasicGrid';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <BasicGrid />
      </CssBaseline>
    );
  }
}

export default App;
