import {
  SET_LIST,
  SET_ALL_LISTS,
  SET_LIST_ITEM,
  SET_USERNAME,
  SET_PRIMARY_COLOR,
  SET_SECONDARY_COLOR,
  REMOVE_LIST_ITEM
} from './actions';
import merge from 'lodash/merge';

const _defaultState = {
  lists: {},
  colors: {
    primary: "#17202A", 
    secondary: "#FDFEFE"
  },
  user: {
    name: "username"
  }
}

const rootReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type) {

    case REMOVE_LIST_ITEM:
      newState.lists[action.data.listId].data.splice(action.data.index, 1);
      return newState;

    case SET_ALL_LISTS:
      newState.lists = action.data;

    case SET_SECONDARY_COLOR:
      newState.colors.secondary = action.data;
      return newState;

    case SET_PRIMARY_COLOR:
      newState.colors.primary = action.data;
      return newState;

    case SET_USERNAME:
      newState.user.name = action.data;
      return newState;

    case SET_LIST:
      newState.lists[action.data.listId] = action.data;
      return newState;

    case SET_LIST_ITEM:
      newState.lists[action.data.listId].data[action.data.index] = action.data.content;
      return newState;

    default: 
      return newState;
  }
}

export default rootReducer;
