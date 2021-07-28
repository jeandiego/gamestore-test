import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import GlobalStyle from '../../global/theme';

const {primary, background, highlight, orangelight, heading} =
  GlobalStyle.colors;

export const Container = styled(RectButton)`
  margin-right: 8px;
`;

export const Content = styled.View`
  padding: 6px 18px;
  background-color: ${p => (p.checked ? orangelight : background)};
  border-radius: 8px;
  justify-content: space-around;
  align-items: center;
  border-color: ${p => p.theme.colors.orangelight};
  border-width: 2px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: ${p => (p.checked ? primary : heading)};
  font-size: 14px;
  font-weight: ${p => (p.checked ? 'bold' : 'normal')};
`;
