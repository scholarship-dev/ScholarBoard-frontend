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
      const res = await axios.get('https://scholarboard-api.herokuapp.com/api/scholarships');
      // const { scholarships } = res.data;
      const scholarships = res.data;
      console.log(scholarships)
      this.setState({
        scholarships
      })
    }
    catch (err) {
      console.log(err)
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

        <ul className="side-nav">

          <Link to="/dashboard">
            <li>
              Your Scholarships
              <i class="fa fa-list" aria-hidden="true"></i>
            </li>
          </Link>

          <Link to="#">
            <li>Applied
            <i class="fa fa-check" aria-hidden="true"></i>
            </li>
          </Link>

          <Link to="#">
            <li>Awarded
            <i class="fa fa-star" aria-hidden="true"></i>
            </li>
          </Link>

          <Link to="#">
            <li>Profile <i class="fa fa-cog" aria-hidden="true"></i>
            </li>
          </Link>

          <section className="tip">
            <h3>Tip of the day</h3>
          </section>

        </ul>

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
