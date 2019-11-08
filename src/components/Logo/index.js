import React from 'react';
import PropTypes from 'prop-types';
import {Container, Title, Message, Image} from './styles';
import logo from '../../../assets/images/logo.png';

export default function Logo({title, message, MessageActivityOn, error}) {
  return (
    <Container>
      <Image source={logo} resizeMode="center" />
      <Title>{title}</Title>
      {MessageActivityOn && <Message error={error}>{message}</Message>}
    </Container>
  );
}
Logo.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  MessageActivityOn: PropTypes.bool,
  error: PropTypes.bool,
};

Logo.defaultProps = {
  title: 'Título da Página',
  message: '',
  MessageActivityOn: false,
  error: false,
};
