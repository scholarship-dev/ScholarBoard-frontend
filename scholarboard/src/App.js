import React, { Component } from 'react';
import './Styles/Global.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Features from './Components/Features';
import About from './Components/About';
import Footer from './Components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Features />
        <About />
        <Footer />
      </div>
    );
  }
}

export default App;
