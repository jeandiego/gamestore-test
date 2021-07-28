import React from 'react';
import {Container, Content, Title} from './styles';

export function Filter({title, checked, ...rest}) {
  return (
    <Container {...rest}>
      <Content checked={checked}>
        <Title checked={checked}>{title}</Title>
      </Content>
    </Container>
  );
}
