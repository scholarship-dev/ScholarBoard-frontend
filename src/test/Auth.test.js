import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Login from '../components/AuthPageComps/Login';
import Signup from '../components/AuthPageComps/Signup';


it('Login Component renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Signup Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Signup />, div);
  ReactDOM.unmountComponentAtNode(div);
})