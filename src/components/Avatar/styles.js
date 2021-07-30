import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const AvatarBg = styled(RectButton)`
  justify-content: center;
  align-items: center;
`;

export const Border = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 92px;
  border: 4px;
  border-color: ${p => p.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const AvatarImage = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 92px;
`;
