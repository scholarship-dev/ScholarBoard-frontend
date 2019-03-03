import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from '../components/UserComps/Dashboard';
import Scholarship from '../components/UserComps/Scholarship';



it('renders Dashboard Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
})


it('renders Scholarship component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scholarship />, div);
  ReactDOM.unmountComponentAtNode(div);
})