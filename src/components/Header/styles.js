import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const IPHONE_X_HEIGHT = getStatusBarHeight();

export const Container = styled.View`
  width: 100%;
  margin-top: ${IPHONE_X_HEIGHT}px;
  margin-bottom: 16px;
  padding: 0px 24px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CenterContent = styled(Content)`
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${p => p.theme.colors.highlight};
  font-size: 22px;
  font-weight: bold;
`;

export const SubTitle = styled.Text`
  color: ${p => p.theme.colors.heading};
  font-size: 15px;
  margin-top: -4px;
`;

export const Wrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled(RectButton)`
  background-color: ${p => p.theme.colors.secondary};
  width: 36px;
  height: 36px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
