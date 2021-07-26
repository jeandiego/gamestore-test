import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

export function Home() {
  const navigation = useNavigation();

  function handleHomeClick() {
    navigation.navigate('Cart');
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <RectButton onPress={handleHomeClick}>
        <Text>Go to Cart</Text>
      </RectButton>
    </View>
  );
}
