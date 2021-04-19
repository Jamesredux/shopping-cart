import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Shop from './Shop';
import Product from './Product';
import Cart from './Cart';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='nav-bar'>
          <Navbar />
        </div>
        <Switch>
          <Route path='/' exact component={Shop} />
          <Route path='/cart' component={Cart} />
          <Route path='/:id' component={Product} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
