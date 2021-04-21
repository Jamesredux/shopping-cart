import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

const Routes = (props) => {
  const handleAddToCart = (item, count) => {
    props.handleAddToCart(item, count);
  };
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='nav-bar'>
          <Navbar cartSize={props.cartSize} />
        </div>
        <Switch>
          <Route path='/' exact>
            <Shop handleAddToCart={handleAddToCart} />
          </Route>
          <Route path='/cart'>
            <Cart cartcontents={props.cart} />
          </Route>
          <Route path='/:id'>
            <Product />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
