import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as cadastroTipo from '../../store/modules/cadastroTipoAula/action';
import {Container} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {navigate} from '../../services/navigation';

export default function CadastroTipoAula() {
  const dispatch = useDispatch();
  const [stateTipo, setStateTipo] = useState('');
  function handleButton() {
    dispatch(cadastroTipo.cadastroTipoAula(stateTipo));
    setStateTipo('');
    navigate('Menu');
  }
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Menu')} />
      <Logo title="Cadastro de aula" />
      <Input
        placeholder="Tipo Aula"
        nomeIco="music"
        functionOnChangeText={text => setStateTipo(text)}
        value={stateTipo}
      />
      <Button
        title="Cadastrar"
        disabledButton={false}
        functionOnPress={() => handleButton()}
      />
    </Container>
  );
}
