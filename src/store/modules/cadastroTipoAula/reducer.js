import produce from 'immer';

const INITIAL_STATE = {
  tipo: '',
};
export default function cadastroTipoAula(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cadastroTipoAula/ADD_TIPO_AULA':
      return produce(state, draft => {
        draft.tipo = action.payload.tipo;
      });
    default:
      return state;
  }
}
