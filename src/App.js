import React, { useState, useEffect } from 'react';
import Routes from './Routes';

const App = () => {
  const [cart, setCart] = useState([1, 2, 3, 4]);

  const handleAddToCart = (item) => {
    console.log(item);
  };

  useEffect(() => {
    console.log('useeffect app called');
  }, []);

  return (
    <div>
      <Routes cart={cart} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
