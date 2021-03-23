import {
  SET_LIST,
  SET_LIST_ITEM
} from './actions';
import merge from 'lodash/merge';

const _defaultState = {
  lists: {},
  colors: {
    primary: "#17202A", 
    secondary: "#FDFEFE"
  }
}

const rootReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);

  switch(action.type) {

    case SET_LIST:
      newState.lists[action.data.listId] = action.data;
      return newState;

    case SET_LIST_ITEM:
      newState.lists[action.data.listId].data[action.data.index] = action.data.content;
      console.log(action.data.content)
      console.log(newState);
      return newState;

    default: 
      return newState;
  }
}

export default rootReducer;
