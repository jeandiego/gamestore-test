import React from 'react';

import styled from 'styled-components/native';

export const LineDivider = styled.View`
  flex: 1;
  background-color: ${p => p.theme.colors.secondary};
  height: 1px;
  margin: 4px 24px;
`;

export function Divider() {
  return <LineDivider />;
}
