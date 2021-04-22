import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const [grandTotal, setGrandTotal] = useState(0);

  const removeFromCart = (id) => {
    props.handleRemoveFromCart(id);
  };

  const updateCount = (id, count) => {
    props.handleUpdateCount(id, count);
  };

  useEffect(() => {
    let newGrandTotal = props.cartcontents.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.count * currentValue.price;
      },
      0
    );
    setGrandTotal(newGrandTotal);
  }, [props.cartcontents]);
  return (
    <div className='cart-div'>
      <div>
        <h2 className='cart-title'>Shopping Cart</h2>
      </div>
      <div className='cart-grid'>
        <div className='cart-row'>
          <div>Item</div>
          <div>Cost</div>
          <div>Amount</div>
          <div>Total</div>
        </div>
        {props.cartcontents.map((item) => (
          <div key={item.id}>
            <CartItem
              item={item}
              removeFromCart={removeFromCart}
              updateCount={updateCount}
            />
          </div>
        ))}
        <div className='cart-row'>
          <div></div>
          <div></div>
          <div>Total to Pay</div>
          <div>{grandTotal.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
