import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Title, TextInput, AreaInput, AreaIcon, Icon} from './styles';

export default function Button({
  placeholder,
  flex,
  nomeIco,
  functionOnChangeText,
  value,
}) {
  return (
    <AreaInput>
      <TextInput
        value={value}
        placeholder={placeholder}
        flexComponent={flex}
        onChangeText={text => functionOnChangeText(text)}
      />
      <AreaIcon>
        <Icon name={nomeIco} />
      </AreaIcon>
    </AreaInput>
  );
}
Button.propTypes = {
  placeholder: PropTypes.string,
  flex: PropTypes.number,
  nomeIco: PropTypes.string,
  functionOnChangeText: PropTypes.func,
  value: PropTypes.string,
};

Button.defaultProps = {
  placeholder: 'placeholder',
  flex: 1,
  nomeIco: 'search',
  functionOnChangeText: () => {},
  value: '',
};
