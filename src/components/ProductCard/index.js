import React from 'react';
import {valueToPrice} from '../../utils/value';
import {BuyButton} from '../BuyButton';
import {
  Container,
  CoverView,
  CoverImg,
  DetailView,
  ScoreView,
  ProductText,
  PriceText,
  ScoreText,
} from './styles';
import {gameCover} from '../../utils/images';

export function ProductCard({products}) {
  const {image, name, score, price} = products;

  return (
    <Container>
      <CoverView>
        <CoverImg source={gameCover.address[image]} resizeMode="cover" />
      </CoverView>
      <DetailView>
        <ProductText numberOfLines={1}>{name}</ProductText>
        <ScoreView>
          <ScoreText>({score})</ScoreText>
        </ScoreView>
        <PriceText>{valueToPrice(price)}</PriceText>
        <BuyButton title="Comprar" />
      </DetailView>
    </Container>
  );
}
