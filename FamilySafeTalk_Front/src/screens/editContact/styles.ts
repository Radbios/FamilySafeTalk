import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 5%;
`;

export const ContentsBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 94%;
`;

export const TitleContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 8%;
`;

export const TitleText = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-family: "Dosis_400Regular";
`;

export const ButtonsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  width: 92%;
`;

export const ButtonBox1 = styled(TouchableOpacity)`
  width: 110%;
  padding: 3%;
  margin-top: 3%;
  background-color: #ced7e1;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: center;
`;

export const PlaceholderTextButton = styled(Text)`
  font-family: "Dosis_400Regular";

`;
export const ButtonText = styled(TextInput)`
  font-family: "Dosis_400Regular";
  font-size: 15px;
  margin-top: 2%;
  color: #F1006D;
  align-self: flex-start;
`;
