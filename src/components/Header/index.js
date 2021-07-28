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
} from './styles';
import CartSvg from '../../assets/cart-icon.svg';
import BackSvg from '../../assets/arrow-back.svg';
import {Avatar} from '../Avatar';
import {Empty} from '../Empty';

export function HeaderHome({handleHomeClick}) {
  const ProfilePic = 'https://github.com/jeandiego.png';

  return (
    <Container>
      <Content>
        <Avatar urlImage={ProfilePic} />
        <Button onPress={handleHomeClick}>
          <CartSvg width={22} height={22} />
        </Button>
      </Content>
    </Container>
  );
}

export function HeaderCart({title}) {
  const navigation = useNavigation();

  return (
    <Container>
      <CenterContent>
        <Button onPress={navigation.goBack}>
          <BackSvg />
        </Button>
        <Wrapper>
          <Title>{title}</Title>
          <SubTitle>3 produtos</SubTitle>
        </Wrapper>
        <Empty />
      </CenterContent>
    </Container>
  );
}
