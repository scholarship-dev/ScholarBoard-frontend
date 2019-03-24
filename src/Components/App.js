import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/sass/main.scss';
import Navbar from './GeneralComps/Navbar';
import Home from './HomePageComps/Home';
import Login from './AuthPageComps/Login';
import Signup from './AuthPageComps/Signup';
import Dashboard from './UserComps/Dashboard';
import Footer from './GeneralComps/Footer';

const App = () => (
    <Router>
        <>
            <Route path="/" component={Navbar} />
            <Route path="/" exact component={Home} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/" component={Footer} />
        </>
    </Router>
);

export default App;
