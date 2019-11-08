import React from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import {Title, AreaButton} from './styles';

export default function Button({
  title,
  disabledButton,
  functionOnPress,
  loading,
  heightFlex,
}) {
  return (
    <AreaButton
      disabled={disabledButton}
      onPress={functionOnPress}
      heightFlex={heightFlex}>
      {loading ? (
        <ActivityIndicator size="small" color="#FEFAF4" />
      ) : (
        <Title>{title}</Title>
      )}
    </AreaButton>
  );
}
Button.propTypes = {
  title: PropTypes.string,
  disabledButton: PropTypes.bool,
  functionOnPress: PropTypes.func,
  loading: PropTypes.bool,
  heightFlex: PropTypes.number,
};

Button.defaultProps = {
  title: 'Titulo do Botão',
  disabledButton: true,
  functionOnPress: () => {},
  loading: false,
  heightFlex: 1,
};
