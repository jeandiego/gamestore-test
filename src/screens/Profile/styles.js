import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import GlobalStyle from '../../global/theme';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RectButton} from 'react-native-gesture-handler';

const {linkedin, github} = GlobalStyle.colors;
const IPHONE_X_HEIGHT = getStatusBarHeight();

export const Container = styled.View`
  flex: 1;
  margin-top: ${IPHONE_X_HEIGHT + 26}px;
  align-items: center;
  padding: 0px 24px;
`;

export const InfoView = styled.View`
  padding: 24px 0px;
`;

export const ProfileImg = styled.Image`
  width: 260px;
  height: 260px;
  border-width: 6px;
  border-color: ${p => p.theme.colors.primary};
  border-radius: 130px;
`;

export const NameText = styled.Text`
  color: ${p => p.theme.colors.highlight};
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const DescriptionText = styled.Text`
  color: ${p => p.theme.colors.heading};
  font-size: 20px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: ${p => p.theme.colors.background};
  font-size: 18px;
  font-weight: bold;
`;

export const LinkButton = styled(RectButton)`
  width: 100%;
  padding: 18px 24px;
  background: ${p => (p?.linkedin ? linkedin : github)};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 8px 0px;
`;

export const Header = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const Button = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7,
})`
  background-color: ${p => p.theme.colors.secondary};
  width: 42px;
  height: 42px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;
