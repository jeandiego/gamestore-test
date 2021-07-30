import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';

const {Navigator, Screen} = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  );
}
