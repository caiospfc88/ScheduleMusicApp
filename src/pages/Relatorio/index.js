import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Container} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import List from '../../components/List';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {navigate} from '../../services/navigation';

export default function Relatorio() {
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Menu')} />
      <Logo title="Relatórios" />
      
      <Button
        title="Agenda"
        disabledButton={false}
        functionOnPress={() => navigate('AgendaAulas')}
      />
      <Button
        title="Contas a pagar"
        disabledButton={false}
        functionOnPress={() => navigate('ConsultaContas')}
      />
    </Container>
  );
}
