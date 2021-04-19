import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Shop = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
    console.log(data);
    setItems(data);
  };

  return (
    <div className='shop-container'>
      <div className='shop-div'>
        {items.map((item) => (
          <div className='shop-item' key={item.id}>
            <Link to={`/${item.id}`}>
              <div>{item.title}</div>
            </Link>
            <img src={item.image} height='200' width='200' alt={item.title} />
            <div>£{item.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

//
