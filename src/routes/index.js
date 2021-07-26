import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/Home';
import {Cart} from '../screens/Cart';

const {Navigator, Screen} = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
        }}>
        <Screen name="Home" component={Home} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
}
