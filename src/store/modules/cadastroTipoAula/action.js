export function cadastroTipoAula(tipo) {
  return {
    type: '@cadastroTipoAula/ADD_TIPO_AULA',
    payload: {
      tipo,
    },
  };
}
