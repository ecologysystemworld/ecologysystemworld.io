import Home from 'Home';
import NoMatch from 'NoMatch';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import WhitePaper from 'WhitePaper';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    const history = this.props.hist;
    return (
      <HashRouter history={history} basename={process.env.PUBLIC_URL}>
        <Route
          render={({location}) => (
            <Switch location={location}>
              <Route exact="/home" component={Home} />
              <Route exact="/whitePaper" component={WhitePaper} />
              <Route component={NoMatch} />
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1>ESW- 100% biodegradable is coming!</h1>
                  <h3>Website Construction in progress</h3>
                  <h4>moreno@ecologysystemworld.io</h4>
                </header>
              </div>
            </Switch>
          )}
        ></Route>
      </HashRouter>
    );
  }
}

export default App;
