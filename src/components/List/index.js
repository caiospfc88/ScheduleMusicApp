import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Title, AreaButton, Picker} from './styles';

export default function Button({data, functionValueChange}) {
  return (
    <Picker>
      {data.map(item => (
        <Picker.Item
          label={item}
          value="{}"
          onValueChange={functionValueChange}
          key={item}
        />
      ))}
    </Picker>
  );
}
Button.propTypes = {
  functionValueChange: PropTypes.string,
  title: PropTypes.string,
  disabledButton: PropTypes.bool,
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  heightFlex: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.string),
};

Button.defaultProps = {
  functionValueChange: () => {},
  title: 'Titulo do Botão',
  disabledButton: true,
  functionOnPress: () => {},
  loading: false,
  heightFlex: 1,
  data: [],
};
