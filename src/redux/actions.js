export const SET_LIST       = "SET_LIST";
export const SET_LIST_ITEM  = "SET_LIST_ITEM";

export const setListItem = data => ({
  type: SET_LIST_ITEM,
  data
});

export const setList = data => ({
  type: SET_LIST,
  data
});
