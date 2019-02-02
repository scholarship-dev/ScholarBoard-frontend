import React, { Component } from 'react';
import './Styles/Global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
