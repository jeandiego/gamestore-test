import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const AvatarBg = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const Border = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 92px;
  border: 2px;
  border-color: ${p => p.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.Image`
  width: 36px;
  height: 36px;
  border-radius: 92px;
`;
