import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  background: ${p => p.theme.colors.primary};
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  margin-bottom: 6px;
`;

export const BuyText = styled.Text`
  color: ${p => p.theme.colors.background};
  font-size: 14px;
  font-weight: bold;
`;
