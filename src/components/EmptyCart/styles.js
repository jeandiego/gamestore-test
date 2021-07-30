import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 0px 24px;
`;

export const SvgView = styled.View`
  align-items: center;
  padding: 48px 0px;
`;

export const DescriptionText = styled.Text`
  color: ${p => p.theme.colors.heading};
  font-size: 16px;
  text-align: center;
`;
