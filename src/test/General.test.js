import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/GeneralComps/Navbar';
import Footer from './components/GeneralComps/Footer';


it('renders Navbar Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Footer Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})