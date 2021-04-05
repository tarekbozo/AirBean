import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import About from './../pages/About';
import Home from './../pages/Home';
import Menu from './../pages/Menu';
import Cart from '../pages/Cart';

export default function RouterPage() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/menu/:id?' component={Menu} />
        <Route exact path='/Cart/:id?' component={Cart} />
        <Route exact path='/about' component={About} />
      </Switch>
    </Router>
  );
}
