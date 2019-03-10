import React, { Component } from 'react';
// import Button from 'common/components/Button';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router-dom/Redirect';
import { Container, AppContainer } from './App.s';
import Home from 'screen/Home';

class App extends Component {
  render() {
    return (
      <Container>
        {/* Toolbar here */}
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/article" component={ArticleDetails} /> */}

            <Route path="/404" component={() => <div>Not found</div>} />
            <Route path="*" render={() => <Redirect to="/404" />} />
          </Switch>
        </AppContainer>
      </Container>
    );
  }
}

export default App;
