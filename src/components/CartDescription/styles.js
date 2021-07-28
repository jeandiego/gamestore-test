import styled from 'styled-components/native';
import GlobalStyle from '../../global/theme';

const {primary, highlight} = GlobalStyle.colors;

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px;
`;

export const Title = styled.Text`
  color: ${p => p.theme.colors.heading};
  font-size: 16px;
  font-weight: ${p => (p.total ? 700 : 500)};
`;

export const Value = styled.Text`
  color: ${p => (p?.total ? primary : highlight)};
  font-size: ${p => (p?.total ? 24 : 20)}px;
  font-weight: bold;
`;
