import {RectButton} from 'react-native-gesture-handler';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

const IPHONE_BOTTOM_SPACE = getBottomSpace();

export const Container = styled(RectButton)`
  flex: 1;
  height: 56px;
  background-color: ${p => p.theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin: 0px 24px;
  border-radius: 12px;
  margin-bottom: ${IPHONE_BOTTOM_SPACE + 36}px;
  margin-top: 12px;
`;

export const Title = styled.Text`
  color: ${p => p.theme.colors.background};
  font-size: 18px;
  font-weight: bold;
`;
