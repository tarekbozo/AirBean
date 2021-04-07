import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import About from './components/About/About';
import Checkout from './components/Checkout/Checkout';
import Layout from './layout/Layout';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className='app'>
        <Layout />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Products} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/cart' component={Cart} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
