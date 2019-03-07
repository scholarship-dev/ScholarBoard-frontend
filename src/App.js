import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import './styles/css/main.css';
import Navbar from './Components/GeneralComps/Navbar';
import Home from './Components/HomePageComps/Home';
import Login from './Components/AuthPageComps/Login';
import Signup from './Components/AuthPageComps/Signup';
import Dashboard from './Components/UserComps/Dashboard';
import Footer from './Components/GeneralComps/Footer';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <div className="App">

          <Route path="/" component={Navbar} />
          <Route path="/" exact component={Home} />
          <Route exact path="/login" component={Login} />

          <Route exact path="/signup" component={Signup} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Footer} />

        </div>
      </Switch>
    </Router>
  </Provider>
);

export default App;
