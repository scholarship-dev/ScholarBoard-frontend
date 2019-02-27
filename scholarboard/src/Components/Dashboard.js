import React, { Component } from 'react';
import Navbar from './Navbar';
import LongFooter from './LongFooter';
import Typed from 'react-typed';
import axios from 'axios';

class Dashboard extends Component {

  componentDidMount() {
    axios.get(`/api/scholarships`).then(data => {
      console.log("data:", data);
    }).catch(console.err);
  };

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
          
            <div className="s-card btn-shadow">
              <div className="left">
                <p className="title">Scholarship Title Goes Here</p>
                <p className="description">lorep de ipsum de lorep de ipsum de lorep de ipsum dev lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de </p>
              </div>
              <div className="right">
                <p className="date-text">Apply By</p>
                <p>NOV O7</p>
                <button className="btn">Read More</button>
              </div>
            </div>

            <div className="s-card btn-shadow">
              <div className="left">
                <p className="title">Scholarship Title Goes Here</p>
                <p className="description">lorep de ipsum de lorep de ipsum de lorep de ipsum dev lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de </p>
              </div>
              <div className="right">
                <p className="date-text">Apply By</p>
                <p>NOV O7</p>
                <button className="btn">Read More</button>
              </div>
            </div>

            <div className="s-card btn-shadow">
              <div className="left">
                <p className="title">Scholarship Title Goes Here</p>
                <p className="description">lorep de ipsum de lorep de ipsum de lorep de ipsum dev lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de </p>
              </div>
              <div className="right">
                <p className="date-text">Apply By</p>
                <p>NOV O7</p>
                <button className="btn">Read More</button>
              </div>
            </div>

            <div className="s-card btn-shadow">
              <div className="left">
                <p className="title">Scholarship Title Goes Here</p>
                <p className="description">lorep de ipsum de lorep de ipsum de lorep de ipsum dev lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de lorep de ipsum de </p>
              </div>
              <div className="right">
                <p className="date-text">Apply By</p>
                <p>NOV O7</p>
                <button className="btn">Read More</button>
              </div>
            </div>

          </div>      
          <LongFooter />
        </div>
    );
  };
};

export default Dashboard;