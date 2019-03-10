import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import styledTheme from './themes/styledTheme';
import { Router } from 'react-router-dom';

import App from './App';
import history from './history';

export default class Root extends Component {
  render() {
    return (
      <ThemeProvider theme={styledTheme}>
        <Router history={history}>
          <App />
        </Router>
      </ThemeProvider>
    );
  }
}
