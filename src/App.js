import Home from 'Home';
import NoMatch from 'NoMatch';
import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import WhitePaper from 'WhitePaper';
import './App.css';
import logo from './logo.svg';

class App extends React.Component {
  render() {
    const history = this.props.hist;
    return (
      <BrowserRouter history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/whitePaper" component={WhitePaper} />
          <Redirect exact from="/" to="/home/" />
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
      </BrowserRouter>
    );
  }
}

export default App;
