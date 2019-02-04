import React, { Component } from 'react';
import Header from './Components/Header';
import HomeTop from './Components/HomeTop';
import Footer from './Components/Footer';
import './Styles/styles.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HomeTop />
        <Footer />
      </div>
    );
  }
}

export default App;
