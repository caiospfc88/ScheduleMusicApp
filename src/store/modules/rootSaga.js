import {all} from 'redux-saga/effects';

import menu from './menu/sagas';
import cadastroAluno from './cadastroAluno/sagas';

export default function* rootSaga() {
  return yield all([
    menu,
    cadastroAluno,
    // adicione mais sagas
  ]);
}
