import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import GlobalStyle from '../../global/theme';

const {secondary, orangelight} = GlobalStyle.colors;

export const Container = styled(RectButton)`
  background: ${p => (p.remove ? orangelight : secondary)};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
`;
