import React from 'react';
import {useDispatch} from 'react-redux';
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
import {addItem, decreaseItem, removeItem} from '../../store/reducers/cart';
import {gameCover} from '../../utils/images';

export function SecondaryCard({product}) {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(removeItem(product));
  }

  function didTouchAdd() {
    dispatch(addItem(product));
  }

  function didTouchDecrease() {
    dispatch(decreaseItem(product));
  }

  return (
    <Container>
      <ImageView>
        <GameImg source={gameCover.address[product.image]} resizeMode="cover" />
      </ImageView>
      <DetailView>
        <ProductText>{product.name}</ProductText>
        <PriceText>{valueToPrice(product.price * product.quantity)}</PriceText>
        <OptionsView>
          <ViewWrapper>
            <OptionWrapper>
              <OptionButton type="decrease" onPress={didTouchDecrease} />
              <InputQuantity value={`${product.quantity}`} editable={false} />
              <OptionButton type="add" onPress={didTouchAdd} />
            </OptionWrapper>
            <OptionButton type="remove" onPress={handleRemoveItem} />
          </ViewWrapper>
        </OptionsView>
      </DetailView>
    </Container>
  );
}
