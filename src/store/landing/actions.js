export function setCurrentItem({commit}, value) {
  commit('SET_CURRENT_ITEM', value);
}
export function deleteCurrentItem({commit}, value) {
  commit('DELETE_CURRENT_ITEM', value);
}
