import React from 'react';
import {Container, Title} from './styles';

export function CheckoutButton({children, ...props}) {
  return (
    <Container {...props}>
      <Title>{children}</Title>
    </Container>
  );
}
