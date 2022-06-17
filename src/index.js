import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import GlobalStyle from './global/theme';
import {Routes} from './routes';
import store from './store';
import './config/ReactotronConfig';
import {MonitorState} from './controller/rules';

const GamestoreApp = () => {
  useEffect(() => {
    MonitorState();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={GlobalStyle}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

const App = __DEV__ ? console.tron.overlay(GamestoreApp) : GamestoreApp;

export default App;
