import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const [grandTotal, setGrandTotal] = useState(0);

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
          <div className='cart-row' key={item.id}>
            <Link to={`/${item.id}`}>
              <div>{item.title}</div>
            </Link>
            <div>{item.price.toFixed(2)}</div>
            <div>{item.count}</div>
            <div>{(item.price * item.count).toFixed(2)}</div>
          </div>
        ))}
        <div className='cart-row'>
          <div></div>
          <div></div>
          <div></div>
          <div>{grandTotal.toFixed(2)}</div>
        </div>
      </div>
      {console.log(props.cartcontents)}
    </div>
  );
};

export default Cart;
