import { combineReducers } from 'redux';

import orderReducer from './orderReducer';
import foodReducer from './foodReducer';

const rootReducer = combineReducers({
  order: orderReducer,
  foods: foodReducer,
});

export default rootReducer;
