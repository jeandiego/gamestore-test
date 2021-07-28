import React from 'react';
import {Container, Title, Value} from './styles';

export function CartDescription({title, value, ...props}) {
  return (
    <Container>
      <Title {...props}>{title}</Title>
      <Value {...props}>{value}</Value>
    </Container>
  );
}
