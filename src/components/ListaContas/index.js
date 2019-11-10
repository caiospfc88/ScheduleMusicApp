import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Contianer, Lista, Text} from './styles';

export default function Conta({data, functionValueChange}) {
  return (
    <Contianer>
     <Lista data={[
       {id:1,nome:'asdfsadf'},{id:2,nome:'asdfsadf'},{id:3,nome:'asdfsadf'}
    ]}
    
    renderItem={({item,index})=>{<Text>asdfasdfasdf</Text>}}/>
    </Contianer>
  );
}
Aula.propTypes = {
  functionValueChange: PropTypes.string,
  title: PropTypes.string,
  disabledButton: PropTypes.bool,
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  heightFlex: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.string),
};

Aula.defaultProps = {
  functionValueChange: () => {},
  title: 'Titulo do Botão',
  disabledButton: true,
  functionOnPress: () => {},
  loading: false,
  heightFlex: 1,
  data: [],
};
