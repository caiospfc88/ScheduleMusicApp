import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const Image = styled.Image`
  flex: 1;
  width:300;
  height:300;
`;
export const Title = styled.Text`
  text-align: center;
  color: #fefaf4;
  font-size: 16px;
  padding-bottom: 8px;
`;

export const Message = styled.Text`
  text-align: center;
  color: ${props => (props.error ? '#e45' : '#fefaf4')};
  font-size: 14px;
  padding-bottom: 8px;
`;
