import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-inner'>
      <h1 className='logo'>JamesRedux</h1>
      <div className='links'>
        <div>
          <Link to='/'>Shop</Link>
        </div>
        <div>
          <Link to='/cart'>cart</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
