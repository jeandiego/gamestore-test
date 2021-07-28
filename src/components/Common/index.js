import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Container} from './styles';

const GlobalContainer = ({children, ...props}) => {
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets} {...props}>
      {children}
    </Container>
  );
};

export default GlobalContainer;
