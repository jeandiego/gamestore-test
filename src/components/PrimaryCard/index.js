import React from 'react';
import {useDispatch} from 'react-redux';
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
import {addItem} from '../../store/reducers/cart';

export function PrimaryCard({product}) {
  const {image, name, score, price} = product;
  const dispatch = useDispatch();

  function handleBuyClick() {
    dispatch(addItem(product));
  }

  return (
    <Container>
      <CoverView>
        <CoverImg source={gameCover.address[image]} resizeMode="cover" />
      </CoverView>
      <DetailView>
        <ProductText numberOfLines={1}>{name}</ProductText>
        <ScoreView>
          <ScoreText>{score} recomendam</ScoreText>
        </ScoreView>
        <PriceText>{valueToPrice(price)}</PriceText>
        <BuyButton onPress={handleBuyClick}>Comprar</BuyButton>
      </DetailView>
    </Container>
  );
}
