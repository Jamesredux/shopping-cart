import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Product = (props) => {
  const [item, setItem] = useState({});
  const [count, setCount] = useState(0);

  const fetchItem = async () => {
    const product = await fetch(
      `https://fakestoreapi.com/products/${props.match.params.id}`
    ).then((res) => res.json());
    setItem(product);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const addToCart = () => {
    if (count !== 0) {
      props.handleAddToCart(item, count);
      setCount(0);
    }
  };

  return (
    <div className='product-div'>
      <div className='title-font'>{item.title}</div>
      <div>
        <img src={item.image} height='400' width='400' alt='product' />
      </div>
      <div className='product-desc'>{item.description}</div>
      <div>£{parseFloat(item.price).toFixed(2)}</div>
      <div>
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
    </div>
  );
};

export default withRouter(Product);
