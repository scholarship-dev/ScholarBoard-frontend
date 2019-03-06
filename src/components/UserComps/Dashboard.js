import React, { Component } from 'react';
import Scholarship from './Scholarship';
import Typed from 'react-typed';
import axios from 'axios';

/* eslint-disable  */
class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scholarships: []
    }
  }

  async componentDidMount() {
    try {
      const scholarshipArr = await axios.get('https://cors.io/?https://scholarboard-api.herokuapp.com/api/scholarships');
      const { data: scholarships } = scholarshipArr;
      console.log(scholarships)
      this.setState({
        scholarships
      })
    }
    catch {
      throw new Error('YOUR GET REQUEST IS NOT WORKING')
    }
  }

  renderScholarships() {
    const { scholarships } = this.state;
    return scholarships.map(scholarship => {
      const truncatedDescription = scholarship.description.slice(20) + '...';
      < Scholarship
        id={scholarship._id}
        name={scholarship.name}
        description={scholarship.description}
        funding={scholarship.funding}
      />
    })
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


        <section className="dashboard-content">

          <section className="filter">
            <h1 className="db-title"><Typed strings={['Scholarships For You, [Name Here]']} typeSpeed={16} /></h1>
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

          <section className="scholarships">
            {this.renderScholarships()}
          </section>

        </section>
      </div>
    );
  }
}

export default Dashboard;
