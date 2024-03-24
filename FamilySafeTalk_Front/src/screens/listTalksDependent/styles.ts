import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
  padding-vertical: 15px;
`;

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-left: 3%
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  font-size: 20px;
  margin-left: 3%;
  font-family: "Dosis_400Regular";
`;

export const LastMessage = styled.Text`
  color: #888;
  margin-left: 3%;
  font-family: "Dosis_400Regular";
  font-size: 20px;
`;

export const Time = styled.Text`
  color: #888;
  font-size: 15px;
  font-family: "Dosis_400Regular";
  margin-right: 5%;
`;

export const BackContainer = styled(TouchableOpacity)`
  width: 100%;
  align-items: start;
`;