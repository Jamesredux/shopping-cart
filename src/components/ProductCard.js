import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    if (count !== 0) {
      props.addToCart(props.item, count);
      setCount(0);
    }
  };
  return (
    <div>
      <Link to={`/${props.item.id}`}>
        <div>{props.item.title}</div>
      </Link>
      <img
        src={props.item.image}
        height='200'
        width='200'
        alt={props.item.title}
      />
      <div>£{props.item.price}</div>
      <label>
        <input
          type='number'
          name='count'
          min='0'
          max='99'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button onClick={addToCart}>Add to Cart</button>
      </label>
    </div>
  );
};

export default ProductCard;
