import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Styles/styles.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Settings from './Components/Settings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/settings' component={Settings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
