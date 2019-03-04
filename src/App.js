import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store';
import './styles/css/main.css';
import Navbar from './components/GeneralComps/Navbar';
import Home from './components/HomePageComps/Home';
import Login from './components/AuthPageComps/Login';
import Signup from './components/AuthPageComps/Signup';
import Dashboard from './components/UserComps/Dashboard';
import Footer from './components/GeneralComps/Footer';

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
          {/* <Route path="/" component={Footer} /> */}

          {/* TODO: Try to redirect them if the route does not exist */}
          {/* <Route
            path="*"
            render={() => (
              <Redirect to="/" />
            )}
          /> */}
        </div>
      </Switch>
    </Router>
  </Provider>
);

export default App;
