import React, { Component } from 'react';
import scholarboard from '../api/scholarboard';
import Scholarship from './UserComponents/Scholarship';


export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scholarships: []
    };
  }

  componentDidMount() {
    scholarboard.get('https://cors.io/?https://scholarboard-api.herokuapp.com/api/scholarships').then((res) => {
      const { data } = res;

      this.setState({
        scholarships: data
      });
    });
  }

  renderScholarships() {
    const { scholarships } = this.state;
    return scholarships.map(item => <Scholarship name={item.name} description={item.description} />)
  }

  render() {
    return (
      <div>
        {this.renderScholarships()}
      </div>
    );
  }
}