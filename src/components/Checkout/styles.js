import styled from 'styled-components/native';

export const Footer = styled.View`
  justify-content: space-between;
  margin-top: 24px;
`;

export const CartInfo = styled.View`
  background: ${p => p.theme.colors.secondary};
  margin: 0px 24px;
  padding: 12px 0px;
  border-radius: 12px;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${p => p.theme.colors.heading};
  margin: 6px 16px;
  opacity: 0.3;
`;
