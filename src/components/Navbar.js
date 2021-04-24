import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  return (
    <div className='nav-inner'>
      <div>
        <Link to='/shopping-cart'>
          <h1 className='logo'>JamesRedux</h1>
        </Link>
      </div>
      <div className='links'>
        <div>
          <Link to='/shopping-cart'>Shop</Link>
        </div>
        <div>
          <Link to='/shopping-cart/about'>About</Link>
        </div>
        <div>
          <Link to='/shopping-cart/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />{' '}
            <span id='cart-size'>({props.cartSize})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
