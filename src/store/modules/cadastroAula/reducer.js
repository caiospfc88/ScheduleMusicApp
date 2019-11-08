import produce from 'immer';

const INITIAL_STATE = {
  idAula: '',
  idAluno: '',
  idTipoAula: '',
  dtInicial: '',
  dtfinal: '',
  Aulas: [],
};
export default function cadastroAula(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cadastroAula/ADD_AULA':
      return produce(state, draft => {
        draft.Alunos.push({
          idAula: action.payload.aula.idAula,
          idAluno: action.payload.aula.idAluno,
          idTipoAula: action.payload.aula.idTipoAula,
          dtInicial: action.payload.aula.dtInicial,
          dtFinal: action.payload.aula.dtFinal,
        });
      });
    default:
      return state;
  }
}
