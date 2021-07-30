import {combineReducers} from 'redux';
import {cartReducer} from './cart';
import {marketReducer} from './market';

const reducers = combineReducers({
  cart: cartReducer,
  market: marketReducer,
});

export default reducers;
