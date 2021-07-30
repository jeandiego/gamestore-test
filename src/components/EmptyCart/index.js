import React from 'react';
import {CheckoutButton} from '../CheckoutButton';
import {Container, DescriptionText, SvgView} from './styles';
import CartSvg from '../../assets/cart-icon-large.svg';
import {useNavigation} from '@react-navigation/native';

export function EmptyCart() {
  const navigation = useNavigation();
  return (
    <Container>
      <SvgView>
        <CartSvg width={180} height={180} />
      </SvgView>
      <DescriptionText>
        Parece que você ainda não adicionou nenhum produto ao seu carrinho :(
      </DescriptionText>
      <CheckoutButton onPress={navigation.goBack}>
        Voltar as compras
      </CheckoutButton>
    </Container>
  );
}
