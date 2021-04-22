import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const CartItem = (props) => {
  const [cartCount, setCartCount] = useState(props.item.count);
  const removeFromCart = () => {
    props.removeFromCart(props.item.id);
  };

  const updateCount = () => {
    props.updateCount(props.item.id, cartCount);
    console.log(cartCount);
  };
  return (
    <div className='cart-row'>
      <Link to={`/${props.item.id}`}>
        <div>{props.item.title}</div>
      </Link>
      <div>{props.item.price.toFixed(2)}</div>
      <div>
        <label className='cart-count'>
          <input
            type='number'
            name='count'
            min='0'
            max='99'
            value={cartCount}
            onChange={(e) => setCartCount(e.target.value)}
          ></input>
          <button onClick={updateCount}>Update</button>
        </label>
      </div>
      <div>{(props.item.price * props.item.count).toFixed(2)}</div>
      <div className='remove-item' onClick={removeFromCart}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </div>
    </div>
  );
};

export default CartItem;
