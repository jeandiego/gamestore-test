import React from 'react';
import {
  Container,
  ImageView,
  DetailView,
  GameImg,
  ProductText,
  PriceText,
  OptionsView,
  ViewWrapper,
  OptionWrapper,
  InputQuantity,
} from './styles';

import {valueToPrice} from '../../utils/value';
import OptionButton from '../OptionButton';

export function SecondaryCard({number, onChangeNumber}) {
  const data = {
    id: 201,
    name: 'Call Of Duty Infinite Warfare',
    price: 49.99,
    score: 80,
    image: require('../../assets/call-of-duty-infinite-warfare.png'),
  };

  return (
    <Container>
      <ImageView>
        <GameImg source={data.image} resizeMode="cover" />
      </ImageView>
      <DetailView>
        <ProductText>{data?.name}</ProductText>
        <PriceText>{valueToPrice(data?.price)}</PriceText>
        <OptionsView>
          <ViewWrapper>
            <OptionWrapper>
              <OptionButton type="decrease" />
              <InputQuantity
                onChangeText={onChangeNumber}
                value={number}
                keyboardType="numeric"
              />
              <OptionButton type="add" />
            </OptionWrapper>
            <OptionButton type="remove" />
          </ViewWrapper>
        </OptionsView>
      </DetailView>
    </Container>
  );
}
