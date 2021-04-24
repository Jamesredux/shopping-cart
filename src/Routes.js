import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Product from './components/Product';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';

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
        <div className='nav-bar static-bar'>
          <Navbar cartSize={props.cartSize} />
        </div>
        <Switch>
          <Route path='/shopping-cart' exact>
            <Shop handleAddToCart={handleAddToCart} />
          </Route>
          <Route path='/shopping-cart/about'>
            <About />
          </Route>
          <Route path='/shopping-cart/cart'>
            <Cart
              cartcontents={props.cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateCount={handleUpdateCount}
            />
          </Route>
          <Route
            exact
            path='/shopping-cart/:id'
            render={(props) => (
              <Product handleAddToCart={handleAddToCart} {...props} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routes;
