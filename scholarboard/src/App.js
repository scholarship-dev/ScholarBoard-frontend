import React, { Component } from 'react';
import './Styles/Global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Features />
      </div>
    );
  }
}

export default App;
