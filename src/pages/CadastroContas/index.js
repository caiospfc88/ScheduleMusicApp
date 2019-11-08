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

export default function CadastroContas() {
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Menu')} />
      <Logo title="Contas" />
      <List data={['Joao', 'Pedro', 'Ana', 'Maria', 'Patricia', 'Celma']} />

      <List data={['Técnica Vocal', 'Violão', 'Guitarra', 'Teclado', 'Bateria']} />
      <Input 
      placeholder="Valor de cada parcela:" flex={2}
      nomeIco="dollar" 
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
        }}>
      </View>
      <Input 
      placeholder="Qtde de parcelas:" flex={2} 
      nomeIco="calculator"
      />
      <Input 
      placeholder="Data de vencimento:" flex={2} 
      nomeIco="calendar"
      />
      <Button
        title="Gerar parcela(s)"
        disabledButton={false}
        functionOnPress={() => navigate('Menu')}
      />
    </Container>
  );
}
