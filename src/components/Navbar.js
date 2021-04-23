import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
  return (
    <div className='nav-inner'>
      <div>
        <Link to='/'>
          <h1 className='logo'>JamesRedux</h1>
        </Link>
      </div>
      <div className='links'>
        <div>
          <Link to='/'>Shop</Link>
        </div>
        <div>
          <Link to='/about'>About</Link>
        </div>
        <div>
          <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} />{' '}
            <span id='cart-size'>({props.cartSize})</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
