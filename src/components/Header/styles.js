import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #1b1c23;
  flex-direction: column;
  height: 80px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #3169d9;
  padding: 5px;
  border-radius: 6px;
`;

export const Text = styled.Text`
  color: #1b1c22;
  font-size: 16px;
  font-weight: bold;
  padding-left: 4px;
`;
