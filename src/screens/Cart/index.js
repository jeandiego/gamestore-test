import React from 'react';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export function Cart() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}>
      <Text>Cart Screen</Text>
      <RectButton onPress={() => {}}>
        <Text>Go to Cart</Text>
      </RectButton>
    </View>
  );
}
