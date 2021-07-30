import {createSlice} from '@reduxjs/toolkit';

const MARKET_INITIAL_STATE = {
  defaultProducts: [],
  products: [],
  filter: 0,
};

const marketSlice = createSlice({
  name: 'market',
  initialState: MARKET_INITIAL_STATE,
  reducers: {
    setDefaultProducts: (state, action) => {
      state.defaultProducts = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const {setDefaultProducts, setProducts, setFilter} = marketSlice.actions;

export const marketReducer = marketSlice.reducer;
