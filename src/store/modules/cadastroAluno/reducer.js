import produce from 'immer';

const INITIAL_STATE = {
  idAluno: '',
  Nome: '',
  Cpf: '',
  Nascimento: '',
  Numero: '',
  Rua: '',
  Bairro: '',
  Telefone: '',
  Cidade: '',
  Estado: '',
  Email: '',
  Alunos: [],
};
export default function cadastroAluno(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cadastroAluno/ADD_ALUNO':
      console.tron.log('asdasdfasdf');
      console.tron.log(action);
      return produce(state, draft => {
        draft.Alunos.push({
          idAluno: action.payload.aluno.idAluno,
          Nome: action.payload.aluno.Nome,
          Cpf: action.payload.aluno.Cpf,
          Nascimento: action.payload.aluno.Nascimento,
          Numero: action.payload.aluno.Numero,
          Rua: action.payload.aluno.Rua,
          Bairro: action.payload.aluno.Bairro,
          Telefone: action.payload.aluno.Telefone,
          Cidade: action.payload.aluno.Cidade,
          Estado: action.payload.aluno.Estado,
          Email: action.payload.aluno.Email,
        });
      });
    default:
      return state;
  }
}
