import React from 'react';
import {Container, Title} from './styles';

export function CheckoutButton({children}) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
