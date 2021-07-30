import {createSlice} from '@reduxjs/toolkit';

const CART_INITIAL_STATE = {
  quantity: 0,
  ship: 0,
  totalCart: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    addItem: (state, action) => {
      const currentIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (currentIndex !== -1) {
        state.items[currentIndex] = {
          ...state.items[currentIndex],
          quantity: state.items[currentIndex].quantity + 1,
        };
      } else {
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    sumItem: (state, action) => {
      const currentIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      state.items[currentIndex] = {
        ...state.items[currentIndex],
        quantity: state.items[currentIndex].quantity + 1,
      };
    },
    decreaseItem: (state, action) => {
      const currentIndex = state.items.findIndex(
        item => item.id === action.payload.id,
      );

      if (state.items[currentIndex].quantity === 1) {
        return;
      }
      state.items[currentIndex] = {
        ...state.items[currentIndex],
        quantity: state.items[currentIndex].quantity - 1,
      };
    },
    setCartDetail: (state, action) => {
      state.totalCart = action.payload.totalCart;
      state.quantity = action.payload.quantity;
      state.ship = action.payload.ship;
    },
  },
});

export const {addItem, removeItem, sumItem, decreaseItem, setCartDetail} =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
