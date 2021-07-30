import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Header,
  Button,
  InfoView,
  ProfileImg,
  NameText,
  LinkButton,
  ButtonText,
  DescriptionText,
} from './styles';
import BackSvg from '../../assets/x-icon.svg';

export function ProfileView() {
  const navigation = useNavigation();
  const ProfilePic = 'https://github.com/jeandiego.png';
  const user = {
    name: 'Jean Diego',
    linkedin: '@jeandiegods',
    github: '@jeandiego',
    description: " I'm interested in working as a React Native developer.",
  };

  return (
    <Container>
      <Header>
        <Button onPress={navigation.goBack}>
          <BackSvg />
        </Button>
      </Header>
      <ProfileImg source={{uri: ProfilePic}} />

      <InfoView>
        <NameText>{user.name}</NameText>
        <DescriptionText>{user.description}</DescriptionText>
      </InfoView>
      <LinkButton>
        <ButtonText>Github: {user.github}</ButtonText>
      </LinkButton>
      <LinkButton linkedin>
        <ButtonText>Linkedin: {user.linkedin}</ButtonText>
      </LinkButton>
    </Container>
  );
}
