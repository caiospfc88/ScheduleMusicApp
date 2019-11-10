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
    
      <Calendar/>
      <ListaAula
      />
      <List data={['07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']} />
      <List data={['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']} />
      <Button
        title="cadastrar aula"
        nomeIco="calendar"
        disabledButton={false}
        functionOnPress={() => navigate('Menu')}
      />
    </Container>
  );
}
