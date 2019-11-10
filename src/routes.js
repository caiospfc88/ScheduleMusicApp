import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Menu from './pages/Menu';
import CadastroAluno from './pages/CadastroAluno';
import CadastroTipoAula from './pages/CadastroTipoAula';
import CadastroAula from './pages/CadastroAula';
import CadastroContas from './pages/CadastroContas';
import Relatorio from './pages/Relatorio';
import AgendaAulas from './pages/AgendaAulas';
import ConsultaContas from './pages/ConsultaContas';

const Routes = createAppContainer(
  createSwitchNavigator({
    Menu,
    CadastroAula,
    CadastroTipoAula,
    CadastroAluno,
    CadastroContas,
    Relatorio,
    AgendaAulas,
    ConsultaContas,
  })
);

export default Routes;
