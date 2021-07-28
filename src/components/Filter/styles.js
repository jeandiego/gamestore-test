import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import GlobalStyle from '../../global/theme';

const {primary, secondary, background, highlight, orangelight, heading} =
  GlobalStyle.colors;

export const Container = styled(RectButton)`
  margin-right: 8px;
`;

export const Content = styled.View`
  width: 100%;
  padding: 8px 16px;
  background-color: ${p => (p.checked ? orangelight : background)};
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  border-color: ${p => (p.checked ? orangelight : heading)};
  border-width: 1px;
  border-radius: 12px;
  opacity: ${p => (p.checked ? 1 : 0.8)};
`;

export const Title = styled.Text`
  color: ${p => (p.checked ? primary : heading)};
  font-size: 14px;
  font-weight: ${p => (p.checked ? 'bold' : 'normal')};
`;

export const Check = styled.View`
  background-color: ${p => p.theme.colors.highlight};
  margin-right: 7px;
`;

export const Checked = styled(Check)`
  background-color: ${p => p.theme.colors.primary};
`;
