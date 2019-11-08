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
      <Logo title="Contrato" />
      <List data={['Joao', 'Pedro', 'Ana', 'Maria', 'Patricia', 'Celma']} />

      <Input placeholder="Tipo de aula" />
      <Input placeholder="qtde" flex={2} />
      <Input placeholder="Valor Total:" flex={2} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 5,
        }}>
        <Input placeholder="Data de inicio" style={{margin: 5}} />
        <Input placeholder="Data de termino" flex={2} />
      </View>
      <Input placeholder="Qtde de parcelas:" flex={2} />
      <List
        data={['segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']}
      />
      <Button
        title="Cadastrar"
        disabledButton={false}
        functionOnPress={() => navigate('Menu')}
      />
    </Container>
  );
}
