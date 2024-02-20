import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 45%;
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
  margin-top: 0%;
  margin-bottom: 5%;
`;

export const DependentIndex = styled(Text)`
  padding-vertical: 2%;
  width: 100%;
  font-size: 20px;
  margin-top: 2.5%;
  text-align: left;
  borderBottomWidth: 1px;
  borderBottomColor: #888;
  color: #888;
  font-family: "Dosis_400Regular";
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

export const ButtonBox = styled(TouchableOpacity)`
  width: 115%;
  padding-vertical: 1%;
  margin-top: 5%;
  border-radius: 10px;
  font-family: "Dosis_400Regular";
`;
  
  export const ButtonName = styled(Text)`
  padding-vertical: 3%;
  font-size: 20px;
  margin-top: -12.5%;
  margin-left: 18%;
  font-family: "Dosis_400Regular";
`;
