export function cadastroAula(aula) {
  return {
    type: '@cadastroAluno/ADD_AULA',
    payload: {
      aula,
    },
  };
}
