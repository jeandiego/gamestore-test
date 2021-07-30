import React from 'react';
import {Container, BuyText} from './styles';

export function BuyButton({children, ...props}) {
  return (
    <Container {...props}>
      <BuyText>{children}</BuyText>
    </Container>
  );
}
