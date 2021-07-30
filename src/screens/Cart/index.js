import React from 'react';
import {useSelector} from 'react-redux';
import {CartView} from './view';

export function Cart() {
  const {items, quantity, ship, totalCart} = useSelector(store => store.cart);

  return (
    <CartView
      items={items}
      quantity={quantity}
      ship={ship}
      totalCart={totalCart}
    />
  );
}
