import {
  ADD_ORDER_QUANTITY,
  DELETE_ORDER_QUANTITY,
} from '../actions/actionTypes';

const initialOrder = {
  totalItem: 0,
};

const orderReducer = (state = initialOrder, action) => {
  switch (action.type) {
    case ADD_ORDER_QUANTITY:
      return {
        totalItem: state.totalItem + 1,
      };
    case DELETE_ORDER_QUANTITY:
      return {
        totalItem: state.totalItem - 1,
      };
    default:
      return state;
  }
};

export default orderReducer;
