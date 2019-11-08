import produce from 'immer';

export default function menu(state = [], action) {
  console.tron.log(state);
  switch (action.type) {
    case '@Menu/ADD_SUCCESS':
      return produce(state, draft => {
        console.tron.log('adicionou produto');
        // const productIndex = draft.findIndex(p => p.id === action.product.id);
        // if (productIndex >=0){
        //  draft[productIndex].amount +=1;
        // }else{
        //  console.log('não tem adicione')
        // }
        draft.push(action.product);
      });
    case '@Menu/REMOVE':
      return produce(state, draft => {
        // const productIndex = draft.findIndex(p => p.id === action.id);
        // if (productIndex >= 0) {
        //  draft.splice(productIndex, 1);
        // }
        console.log('removeu o produto');
      });
    default:
      return state;
  }
}
