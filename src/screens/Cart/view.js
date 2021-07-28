import React from 'react';
import GlobalContainer from '../../components/Common';
import {HeaderCart} from '../../components/Header';

export function CartView() {
  return (
    <GlobalContainer>
      <HeaderCart title="Meu carrinho" cart goBack />
    </GlobalContainer>
  );
}
