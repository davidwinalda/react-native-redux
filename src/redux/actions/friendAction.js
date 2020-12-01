import { ADD_FRIEND } from './actionTypes';

export const addFriendAction = (friendsIndex) => ({
  type: ADD_FRIEND,
  payload: friendsIndex,
});
