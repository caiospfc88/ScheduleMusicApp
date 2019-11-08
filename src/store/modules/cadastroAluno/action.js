export function cadastroAluno(aluno) {
  return {
    type: '@cadastroAluno/ADD_ALUNO',
    payload: {
      aluno,
    },
  };
}
