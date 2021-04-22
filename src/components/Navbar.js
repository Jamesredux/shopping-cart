import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to='/cart'>cart - {props.cartSize}</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
