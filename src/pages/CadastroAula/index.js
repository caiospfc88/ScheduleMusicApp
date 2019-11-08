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

export default function CadastroAula() {
  const alunosList = useSelector(state => state.cadastroAluno.Alunos);
  const tipoList = useSelector(state => state.cadastroTipoAula.Alunos);
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Menu')} />
      <Logo title="Cadastro de Aula" />
      <Text style={{color: '#ffffff'}}>Alunos</Text>
      <List data={alunosList} functionValueChange={() => {}} />
      <Text style={{color: '#ffffff'}}>Tipo de aula</Text>
      <List data={tipoList} functionValueChange={() => {}} />
      <Button
        title="Data"
        nomeIco="calendar"
        disabledButton={false}
        functionOnPress={() => navigate('Menu')}
      />
      <Calendar/>
      <ListaAula
      />
    </Container>
  );
}
