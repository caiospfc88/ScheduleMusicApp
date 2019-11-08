export function cadastroConta(conta) {
  return {
    type: '@cadastroConta/ADD_CONTA',
    payload: {
      conta,
    },
  };
}
