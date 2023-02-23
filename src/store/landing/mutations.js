export const SET_CURRENT_ITEM = (state, value) => {
  state.personalItem.push(value);
};

export const DELETE_CURRENT_ITEM = (state, value) => {
  const index = state.personalItem.findIndex(item => item.id === value);
  state.personalItem.splice(index, 1);
};
