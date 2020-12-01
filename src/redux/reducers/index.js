import { combineReducers } from 'redux';

import orderReducer from './orderReducer';
import foodReducer from './foodReducer';
import friendReducer from './friendReducer';

const rootReducer = combineReducers({
  order: orderReducer,
  foods: foodReducer,
  friends: friendReducer,
});

export default rootReducer;
