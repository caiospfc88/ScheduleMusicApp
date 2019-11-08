import React from 'react';
import PropTypes from 'prop-types';
import {Container, Button, Text} from './styles';

export default function Header({buttonExist, title, functionOnPress}) {
  return (
    <Container>
      {buttonExist ? (
        <Button onPress={functionOnPress}>
          <Text>{title}</Text>
        </Button>
      ) : null}
    </Container>
  );
}
Header.propTypes = {
  buttonExist: PropTypes.bool,
  title: PropTypes.string,
  functionOnPress: PropTypes.func,
};
Header.defaultProps = {
  buttonExist: true,
  title: 'Voltar',
  functionOnPress: () => {},
};
