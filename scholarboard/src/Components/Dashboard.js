import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Typed from 'react-typed';

class Dashboard extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="dashboard-page">
            <h1 className="db-title"><Typed strings={['Scholarships For You, Jeremy']} typeSpeed={16} /></h1>
            <form className="sort-tool btn-shadow">
            <input placeholder="Search Term"></input>
              <select name="Filters">
                <option value="1">Filter #1</option>
                <option value="2">Filter #2</option>
                <option value="3">Filter #3</option>
                <option value="4">Filter #4</option>
              </select>

              <button className="btn">Search</button>
            </form>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Dashboard;