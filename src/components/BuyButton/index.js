import React from 'react';
import {Container, BuyText} from './styles';

export function BuyButton({title}) {
  return (
    <Container>
      <BuyText>{title}</BuyText>
    </Container>
  );
}
