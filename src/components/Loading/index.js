import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';
import GlobalStyle from '../../global/theme';

const {primary} = GlobalStyle.colors;

export const Loading = styled(ActivityIndicator).attrs({
  size: 'large',
  color: primary,
})`
  flex: 1;
`;
