import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0px 24px;
  border-radius: 8px;
  padding: 12px 0px;
  flex-direction: row;
`;

export const ImageView = styled.View`
  margin: 0px 6px;
  border-radius: 8px;
  overflow: hidden;
`;

export const GameImg = styled.Image`
  width: 90px;
  height: 110px;
`;

export const DetailView = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ProductText = styled.Text`
  color: ${p => p.theme.colors.highlight};
  font-size: 16px;
`;

export const PriceText = styled.Text`
  color: ${p => p.theme.colors.highlight};
  font-size: 18px;
  font-weight: bold;
  padding: 4px 0px;
`;

export const OptionsView = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const ViewWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const OptionWrapper = styled.View`
  flex-direction: row;
`;

export const InputQuantity = styled(TextInput)`
  color: ${p => p.theme.colors.highlight};
  width: 42px;
  height: 32px;
  text-align: center;
  border-radius: 8px;
  margin-right: 6px;
  padding: 0px;
  border-width: 2px;
  border-color: ${p => p.theme.colors.secondary};
`;
