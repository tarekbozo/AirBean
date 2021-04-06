import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
