import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const Shop = (props) => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products').then((res) =>
      res.json()
    );
    setItems(data);
  };

  const addToCart = (item, count) => {
    props.handleAddToCart(item, count);

    // when items added to cart, need to check if same type already in cart - just update count
  };

  return (
    <div className='shop-container'>
      <div className='shop-div'>
        {items.map((item) => (
          <div className='shop-item' key={item.id}>
            <ProductCard item={item} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

//
