import React, { Component } from 'react';
import Typed from 'react-typed';
import axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="dashboard">

        <section>

          <nav>
            <ul>
              <a href="/">
                <li>Your Scholarships</li>
              </a>
              <a href="/applied">
                <li>Applied</li>
              </a>
              <a href="/awarded">
                <li>Awarded</li>
              </a>
              <a href="#">
                <li>Profile</li>
              </a>
            </ul>
          </nav>

        </section>


        <section>
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
        </section>


      </div>
    );
  }
}

export default Dashboard;
