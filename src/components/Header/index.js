import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Content,
  CenterContent,
  Title,
  SubTitle,
  Button,
  Wrapper,
  QuantityView,
  QuantityText,
} from './styles';
import CartSvg from '../../assets/cart-icon.svg';
import BackSvg from '../../assets/arrow-back.svg';
import {Avatar} from '../Avatar';
import {Empty} from '../Empty';

export function HeaderHome({handleHomeClick, quantity, ...props}) {
  const ProfilePic = 'https://github.com/jeandiego.png';

  return (
    <Container>
      <Content>
        <Avatar urlImage={ProfilePic} />
        <Button onPress={handleHomeClick} {...props}>
          {quantity !== 0 && (
            <QuantityView>
              <QuantityText>{quantity}</QuantityText>
            </QuantityView>
          )}
          <CartSvg width={22} height={22} />
        </Button>
      </Content>
    </Container>
  );
}

export function HeaderCart({title, quantity}) {
  const navigation = useNavigation();

  return (
    <Container>
      <CenterContent>
        <Button onPress={navigation.goBack}>
          <BackSvg />
        </Button>
        <Wrapper>
          <Title>{title}</Title>
          <SubTitle>{quantity} produtos</SubTitle>
        </Wrapper>
        <Empty />
      </CenterContent>
    </Container>
  );
}
