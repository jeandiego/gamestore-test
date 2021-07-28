import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import GlobalStyle from './global/theme';
import {Routes} from './routes';

const App = () => {
  return (
    <ThemeProvider theme={GlobalStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
