import React from 'react';
import {Checkout} from '../../components/Checkout';
import GlobalContainer from '../../components/Common';
import {Divider} from '../../components/Divider';
import {HeaderCart} from '../../components/Header';
import {SecondaryCard} from '../../components/SecondaryCard';
import {EmptyCart} from '../../components/EmptyCart';
import {CartList} from './styles';

export function CartView({
  number,
  onChangeNumber,
  items,
  quantity,
  ship,
  totalCart,
}) {
  return (
    <GlobalContainer>
      <HeaderCart title="Meu carrinho" cart goBack quantity={quantity} />
      <CartList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SecondaryCard
            number={number}
            onChangeNumber={onChangeNumber}
            product={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          items.length > 0 && <Checkout ship={ship} totalCart={totalCart} />
        }
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <EmptyCart />}
      />
    </GlobalContainer>
  );
}
