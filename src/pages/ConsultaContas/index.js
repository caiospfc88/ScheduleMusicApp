import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {Container} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import List from '../../components/List';
import ListaAula from '../../components/ListaAula';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Calendar from '../../components/CalendarForm';
import {navigate} from '../../services/navigation';

export default function ConsultaContas() {
  const alunosList = useSelector(state => state.cadastroAluno.Alunos);
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Relatorio')} />
      <Logo title="Cadastro de Aula" />
      <List data={alunosList} functionValueChange={() => {}} />
      <Button
        title="Confirmar"
        nomeIco="calendar"
        disabledButton={false}
        functionOnPress={() => navigate('Menu')}
      />
      <ListaAula
      />
    </Container>
  );
}
