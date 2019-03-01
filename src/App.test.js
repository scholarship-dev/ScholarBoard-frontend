import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/AuthPageComps/Login';
import Signup from './components/AuthPageComps/Signup';
import Navbar from './components/GeneralComps/Navbar';
import Footer from './components/GeneralComps/Footer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


//Testing Auth Page Components
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

//Testing General Components
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


it('renders Footer Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
})