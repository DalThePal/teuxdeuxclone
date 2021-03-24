export const SET_LIST             = "SET_LIST";
export const SET_ALL_LISTS        = "SET_ALL_LISTS";
export const SET_LIST_ITEM        = "SET_LIST_ITEM";
export const REMOVE_LIST_ITEM     = "REMOVE_LIST_ITEM";
export const SET_USERNAME         = "SET_USERNAME";
export const SET_PRIMARY_COLOR    = "SET_PRIMARY_COLOR";
export const SET_SECONDARY_COLOR  = "SET_SECONDARY_COLOR";

export const removeListItem = data => ({
  type: REMOVE_LIST_ITEM,
  data
});

export const setAllLists = data => ({
  type: SET_ALL_LISTS,
  data
});

export const setSecondaryColor = data => ({
  type: SET_SECONDARY_COLOR,
  data
});

export const setPrimaryColor = data => ({
  type: SET_PRIMARY_COLOR,
  data
});

export const setUsername = data => ({
  type: SET_USERNAME,
  data
});

export const setListItem = data => ({
  type: SET_LIST_ITEM,
  data
});

export const setList = data => ({
  type: SET_LIST,
  data
});
