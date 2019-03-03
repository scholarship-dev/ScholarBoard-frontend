import React from 'react';
import ReactDOM from 'react-dom';
import Features from '../components/HomePageComps/Features';
import Header from '../components/HomePageComps/Header';
import Team from '../components/HomePageComps/Team';


it('renders Header Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Features component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Features />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Team component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Team />, div);
  ReactDOM.unmountComponentAtNode(div);
})

it('renders Footer Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})

