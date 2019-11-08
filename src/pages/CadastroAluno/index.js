import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {bindActionCreators} from 'redux';
import * as cadastroAlunoActions from '../../store/modules/cadastroAluno/action';
import {Container, SeparatorInput} from './styles';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {navigate} from '../../services/navigation';

export default function CadastroAluno() {
  const dispatch = useDispatch();
  const [stateNome, setStateNome] = useState('');
  const [stateCpf, setStateCpf] = useState('');
  const [stateNascimento, setStateNascimento] = useState('');
  const [stateRua, setStateRua] = useState('');
  const [stateNumero, setStateNumero] = useState('');
  const [stateBairro, setStateBairro] = useState('');
  const [stateCidade, setStateCidade] = useState('');
  const [stateEstado, setStateEstado] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [stateTelefone, setStateTelefone] = useState('');
  const alunosList = useSelector(state => state.cadastroAluno.Alunos);
  function handleButton() {
    const aluno = {
      idAluno: alunosList.length,
      Nome: stateNome,
      Cpf: stateCpf,
      Nascimento: stateNascimento,
      Numero: stateNumero,
      Rua: stateRua,
      Bairro: stateBairro,
      Telefone: stateTelefone,
      Cidade: stateCidade,
      Estado: stateEstado,
      Email: stateEmail,
    };
    dispatch(cadastroAlunoActions.cadastroAluno(aluno));
    setStateNome('');
    setStateCpf('');
    setStateNascimento('');
    setStateRua('');
    setStateNumero('');
    setStateBairro('');
    setStateCidade('');
    setStateEstado('');
    setStateEmail('');
    setStateTelefone('');
    navigate('Menu');
  }
  return (
    <Container>
      <Header title="Voltar" functionOnPress={() => navigate('Menu')} />
      <Logo title="Cadastro de aluno" />
      <Input
        placeholder="Nome"
        nomeIco="user"
        functionOnChangeText={text => setStateNome(text)}
        value={stateNome}
      />
      <Input
        placeholder="CPf"
        nomeIco="id-card"
        functionOnChangeText={text => setStateCpf(text)}
        value={stateCpf}
      />
      <Input
        placeholder="Nasimento"
        nomeIco="calendar"
        functionOnChangeText={text => setStateNascimento(text)}
        value={stateNascimento}
      />
      <SeparatorInput>
        <Input
          flex={4}
          placeholder="Rua"
          nomeIco="map-marker"
          functionOnChangeText={text => setStateRua(text)}
          value={stateRua}
        />
        <Input
          flex={1}
          placeholder="Numero"
          nomeIco="home"
          functionOnChangeText={text => setStateNumero(text)}
          value={stateNumero}
        />
      </SeparatorInput>

      <Input
        placeholder="Bairro"
        nomeIco="map-marker"
        functionOnChangeText={text => setStateBairro(text)}
        value={stateBairro}
      />
      <Input
        placeholder="Telefone"
        nomeIco="mobile"
        functionOnChangeText={text => setStateTelefone(text)}
        value={stateTelefone}
      />
      <SeparatorInput>
        <Input
          flex={3}
          placeholder="Cidade"
          nomeIco="map-marker"
          functionOnChangeText={text => setStateCidade(text)}
          value={stateCidade}
        />
        <Input
          flex={1}
          placeholder="Estado"
          nomeIco="map-marker"
          functionOnChangeText={text => setStateEstado(text)}
          value={stateEstado}
        />
      </SeparatorInput>

      <Input
        placeholder="Email@.com"
        nomeIco="envelope"
        functionOnChangeText={text => setStateEmail(text)}
        value={stateEmail}
      />
      <Button
        title="Cadastrar"
        disabledButton={false}
        functionOnPress={() => handleButton()}
      />
    </Container>
  );
}
