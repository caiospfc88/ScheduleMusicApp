import styled from 'styled-components/native';

export const AreaButton = styled.TouchableOpacity`
  flex: ${props => props.heightFlex};
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  height: 50;
  background: #3169d9;
  margin-bottom: 10;
`;
export const Title = styled.Text`
  color: #fefefe;
  font-size: 20;
  text-align: center;
`;
