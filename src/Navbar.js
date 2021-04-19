import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-inner'>
      <ul>
        <li>
          <Link to='/'>Shop</Link>
        </li>
        <li>
          <Link to='/cart'>cart</Link>
        </li>
        <li>
          <Link to='/product'>product</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
