import App from '../App';
import React from 'react';
import Features from './components/HomePageComps/Features';
import Header from './components/HomePageComps/Header';



it('renders Footer Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})


it('renders Features component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
})