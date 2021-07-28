import React, {useState, useEffect} from 'react';
import {CartView} from './view';

export function Cart() {
  const [number, onChangeNumber] = useState('1');

  useEffect(() => {}, [number]);

  return <CartView number={number} onChangeNumber={onChangeNumber} />;
}
