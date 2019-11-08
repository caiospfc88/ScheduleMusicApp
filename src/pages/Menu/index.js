import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Container} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import api from '../../services/api';
import * as MenuActions from '../../store/modules/menu/action';
import {navigate} from '../../services/navigation';

export default function Menu() {
  return (
    <Container>
      <Logo title="Menu" />
      <Button
        title="Cadastro de aluno"
        disabledButton={false}
        functionOnPress={() => navigate('CadastroAluno')}
      />
      <Button
        title="Cadastro de tipo de aula"
        disabledButton={false}
        functionOnPress={() => navigate('CadastroTipoAula')}
      />
      <Button
        title="Cadastra aula"
        disabledButton={false}
        functionOnPress={() => navigate('CadastroAula')}
      />
      <Button
        title="Cadastro Contas"
        disabledButton={false}
        functionOnPress={() => navigate('CadastroContas')}
      />
      <Button
        title="Relatorio"
        disabledButton={false}
        functionOnPress={() => navigate('Relatorio')}
      />
    </Container>
  );
}
