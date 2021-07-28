import React from 'react';
import styled from 'styled-components/native';

const EmptySpace = styled.View`
  width: 36px;
  height: 36px;
`;

export function Empty() {
  return <EmptySpace />;
}
