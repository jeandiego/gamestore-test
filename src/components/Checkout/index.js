import React from 'react';
import {valueToPrice} from '../../utils/value';
import {CartDescription} from '../CartDescription';
import {CheckoutButton} from '../CheckoutButton';
import {Footer, CartInfo, Divider} from './styles';

export function Checkout({ship, totalCart}) {
  return (
    <Footer>
      <CartInfo>
        <CartDescription title="No carrinho:" value={valueToPrice(totalCart)} />
        <CartDescription title="Frete:" value={valueToPrice(ship)} />
        <Divider />
        <CartDescription
          title="Total do pedido:"
          value={valueToPrice((ship += parseFloat(totalCart)))}
          total
        />
      </CartInfo>
      <CheckoutButton>Finalizar compra</CheckoutButton>
    </Footer>
  );
}
