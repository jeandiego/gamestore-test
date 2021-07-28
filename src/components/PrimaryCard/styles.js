import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: 48%;
  background-color: ${p => p.theme.colors.secondary};
  border-radius: 12px;
  align-items: center;
  margin-bottom: 16px;
`;

export const CoverView = styled.View`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

export const CoverImg = styled.Image`
  width: 100%;
  height: 220px;
`;

export const DetailView = styled.View`
  width: 100%;
  padding: 6px 12px;
`;

export const ScoreView = styled.View`
  flex-direction: row;
`;

export const ProductText = styled.Text`
  color: ${p => p.theme.colors.highlight};
  font-size: 16px;
  font-weight: 700;
`;

export const PriceText = styled.Text`
  color: ${p => p.theme.colors.primary};
  font-size: 16px;
  font-weight: bold;
  padding: 6px 0px;
`;

export const ScoreText = styled.Text`
  color: ${p => p.theme.colors.heading};
  font-size: 12px;
  font-weight: 700;
`;
