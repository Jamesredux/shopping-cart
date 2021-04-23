import React, { useState, useEffect } from 'react';
import Routes from './Routes';

const App = () => {
  const [cart, setCart] = useState([]);

  const [cartSize, setCartSize] = useState(0);

  const handleAddToCart = (item, count) => {
    let shallowCopy = [...cart];
    if (shallowCopy.some((obj) => obj.id === item.id)) {
      let productIndex = shallowCopy.findIndex(
        (product) => product.id === item.id
      );
      let updatedProduct = { ...shallowCopy[productIndex] };
      updatedProduct.count += parseInt(count);
      shallowCopy[productIndex] = updatedProduct;
      setCart(shallowCopy);
    } else {
      item.count = parseInt(count);
      shallowCopy.push(item);
      setCart(shallowCopy);
    }
  };

  const handleRemoveFromCart = (id) => {
    let shallowCopy = [...cart];
    let itemIndex = shallowCopy.findIndex((product) => product.id === id);
    shallowCopy.splice(itemIndex, 1);

    setCart(shallowCopy);
  };

  const handleUpdateCount = (id, count) => {
    let shallowCopy = [...cart];
    let itemIndex = shallowCopy.findIndex((product) => product.id === id);
    let updatedProduct = { ...shallowCopy[itemIndex] };
    updatedProduct.count = count;
    shallowCopy[itemIndex] = updatedProduct;
    setCart(shallowCopy);
  };

  useEffect(() => {
    let newCartSize = cart.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.count;
    }, 0);
    setCartSize(newCartSize);
  }, [cart]);

  return (
    <div>
      <Routes
        cart={cart}
        cartSize={cartSize}
        handleAddToCart={handleAddToCart}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateCount={handleUpdateCount}
      />
    </div>
  );
};

export default App;
