import { ADD_FRIEND } from '../actions/friendAction';

const initialFriend = {
  current: [],
  possible: ['a', 'b', 'c'],
};

const friendReducer = (state = initialFriend, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const { current, possible } = state;

      const newArrayPossible = possible.slice();
      const newArrayCurrent = current.slice();

      const addedFriend = newArrayPossible.splice(action.payload, 1);

      newArrayCurrent.push(addedFriend);

      const newState = {
        ...state,
        current: newArrayCurrent,
        possible: newArrayPossible,
      };

      return newState;
    default:
      return state;
  }
};

export default friendReducer;
