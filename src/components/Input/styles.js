import styled from 'styled-components/native';
import Icons from 'react-native-vector-icons/FontAwesome';

export const AreaInput = styled.View`
  flex: ${props => props.flexComponent};
  flex-direction: row;
  border-width: 3;
  border-color: #fefefe;
  margin-bottom: 10px;
  border-radius: 6px;
  margin-left: 10px;
`;
export const TextInput = styled.TextInput`
  flex: 4;
  background: #fefefe;
`;
export const AreaIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #3169d9;
`;
export const Title = styled.Text`
  color: #fefefe;
  font-size: 20;
  text-align: center;
`;
export const Icon = styled(Icons)`
  color: #fefefe;
  font-size: 20px;
  font-weight: bold;
`;
