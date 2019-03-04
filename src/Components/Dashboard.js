import React, { Component } from 'react';
import Typed from 'react-typed';
import axios from 'axios';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {

  componentDidMount() {
    axios.get(`/api/scholarships`, this.props.user).then(res => {
      console.log("data:", res);
      
    }).catch(console.err);
  };

  render() {
    console.log("this.props.user", this.props.user);
    
    if (this.props.user === "") {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <div className="dashboard-page">
          <h1 className="db-title"><Typed strings={[`Scholarships For You, ${this.props.user.firstname}`]} typeSpeed={16} /></h1>
          <form className="sort-tool btn-shadow">
            <input placeholder="Search Term"></input>
            <select name="Filters">
              <option value="1">Filter By..</option>
              <option value="2">Age</option>
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
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { user: state.user };
};

const UserDashboard = connect(mapStateToProps, null)(Dashboard);


export default UserDashboard;