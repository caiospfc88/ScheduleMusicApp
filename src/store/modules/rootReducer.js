import {combineReducers} from 'redux';
import menu from './menu/reducer';
import cadastroAluno from './cadastroAluno/reducer';
import cadastroTipoAula from './cadastroTipoAula/reducer';

export default combineReducers({
  menu,
  cadastroAluno,
  cadastroTipoAula,
});
