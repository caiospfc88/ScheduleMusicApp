export function addToMenuRequest(id) {
  return {
    type: '@Menu/ADD_REQUEST',
    id,
  };
}
export function addToMenuSuccess(product) {
  return {
    type: '@Menu/ADD_SUCCESS',
    product,
  };
}
export function removeFromMenu(id) {
  return {
    type: '@Menu/REMOVE',
    id,
  };
}
export function updateAmount(id, amount) {
  return {
    type: '@Menu/UPDATE_AMOUNT',
  };
}
