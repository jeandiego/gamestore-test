import store from '../store';
import {SHIPPMENT_PRICE, PRICE_TO_GET_FREE_SHIP} from '../config/constants';

import {setCartDetail} from '../store/reducers/cart';

export function MonitorState() {
  store.subscribe(() => {
    const state = store.getState().cart;

    const quantity = state.items.reduce(
      (_quantity, item) => _quantity + item.quantity,
      0,
    );

    const totalCart = state.items.reduce(
      (_totalCart, item) => _totalCart + item.price * item.quantity,
      0,
    );

    const ship =
      totalCart >= PRICE_TO_GET_FREE_SHIP ? 0 : quantity * SHIPPMENT_PRICE;

    if (
      state.quantity !== quantity ||
      state.totalCart !== totalCart ||
      state.ship !== ship
    ) {
      store.dispatch(setCartDetail({quantity, totalCart, ship}));
    }
  });
}
