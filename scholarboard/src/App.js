import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Styles/styles.css';
import Home from './Components/Home'
import Login from './Components/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
