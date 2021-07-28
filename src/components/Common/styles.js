import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${p => p.theme.colors.background};
  padding-top: ${p => p.safeArea.top + (p?.extraPadding || 0)}px;
`;
