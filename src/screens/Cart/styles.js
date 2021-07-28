import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

export const Content = styled(ScrollView)``;

export const Footer = styled.View`
  justify-content: space-between;
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
  margin: 6px 24px;
  opacity: 0.3;
`;
