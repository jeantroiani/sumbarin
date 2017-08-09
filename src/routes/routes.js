import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from '../modules/Home/Home';
import Navbar from '../modules/Navbar/Navbar';

const Routes = () => (
    <Router>
        <div>
            <Navbar />
            <Route path="/" component={Home} />
        </div>
    </Router>
)

export default Routes;