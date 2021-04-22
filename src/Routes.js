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

  const handleRemoveFromCart = (id) => {
    props.handleRemoveFromCart(id);
  };

  const handleUpdateCount = (id, count) => {
    if (count === 0) {
      props.handleRemoveFromCart(id);
    } else {
      props.handleUpdateCount(id, count);
    }
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
            <Cart
              cartcontents={props.cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCount={handleUpdateCount}
            />
          </Route>
          <Route
            exact
            path='/:id'
            render={(props) => (
              <Product handleAddToCart={handleAddToCart} {...props} />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
