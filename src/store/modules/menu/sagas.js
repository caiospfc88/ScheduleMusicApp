// chama funções assincronas com respostas
// select busca informações sobre o estado
import {call, select, put, all, takeLatest} from 'redux-saga/effects';
import api from '../../../services/api';
import {addToCartSuccess} from './action';
import {navigate} from '../../../routes';
// generator
// é como se fosse um async
function* addToMenu(id) {
  console.tron.log('navegação');
  console.tron.log(`nav${navigate}`);
  // const productExists = yield select(state =>
  //  state.Menu.find(p => p.id === id)
  // );
  console.tron.log(`aqui é na funcao saga ${id}`);
  console.tron.warn('Mensagem de erro');
  console.tron.log(api);
  // métodos que são asincronos e retornam promises
  const response = yield call(api.get, `/products`);
  console.tron.log(response);
  // dispara uma action do reducer
  yield put(addToMenuSuccess(response.data));
}

export default all([
  // para inpedir de usuario apressado
  // se ele clickar duas vezes rapido no botão ele desMenua
  takeLatest('@Menu/ADD_REQUEST', addToMenu),
]);
