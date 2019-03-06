import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    catch (err) {
      throw new Error('YOUR GET REQUEST IS NOT WORKING')
    }
  }

  renderScholarships() {
    const { scholarships } = this.state;
    if (scholarships.length === 0) {
      return <h1 style={{ fontSize: '2em' }}>Loading Scholarships</h1>
    }
    return scholarships.map(scholarship => <Scholarship key={scholarship._id} name={scholarship.name} description={scholarship.description} funding={scholarship.funding} />)
  }



  render() {
    return (
      <div className="dashboard">

        <section>
          <nav>
            <ul>
              <Link to="/dashboard">
                <li>Your Scholarships</li>
              </Link>
              <Link to="#">
                <li>Applied</li>
              </Link>
              <Link to="#">
                <li>Awarded</li>
              </Link>
              <Link to="#">
                <li>Profile</li>
              </Link>
            </ul>
          </nav>
        </section>


        <section className="dashboard-content">

          <section className="filter">
            <h1 ><Typed strings={['Scholarships For You, Annie']} typeSpeed={16} /></h1>
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
