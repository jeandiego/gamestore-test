import React from 'react';
import {CartDescription} from '../../components/CartDescription';
import {CheckoutButton} from '../../components/CheckoutButton';
import GlobalContainer from '../../components/Common';
import {HeaderCart} from '../../components/Header';
import {SecondaryCard} from '../../components/SecondaryCard';
import {Content, Footer, Divider, CartInfo} from './styles';

export function CartView({number, onChangeNumber}) {
  return (
    <GlobalContainer>
      <HeaderCart title="Meu carrinho" cart goBack />
      <Content>
        <SecondaryCard number={number} onChangeNumber={onChangeNumber} />
        <Footer>
          <CartInfo>
            <CartDescription title="No carrinho:" value="R$ 109,50" />
            <CartDescription title="Frete:" value="R$ 10,00" />
            <Divider />
            <CartDescription title="Total do pedido:" value="R$ 109,50" total />
          </CartInfo>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </Footer>
      </Content>
    </GlobalContainer>
  );
}
