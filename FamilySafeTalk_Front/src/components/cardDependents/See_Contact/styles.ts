import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 85%;
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

export const TitleText = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-family: "Dosis_400Regular"
`;

export const ButtonsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  width: 92%;
  `;
  
export const ButtonBox1 = styled(TouchableOpacity)`
  width: 110%;
  padding-vertical: 3%;
  margin-top: 3%;
  background-color: #CED7E1;
  border-radius: 10px;
`;

export const ButtonBox = styled(TouchableOpacity)`
  width: 110%;
  padding-vertical: 1%;
  margin-top: 2%;
  background-color: #CED7E1;
  border-radius: 10px;
  font-family: "Dosis_400Regular";
`;

export const ButtonTextPhone = styled(Text)`
  padding-vertical: 9%;
  margin-top: -10%;
  margin-left: 3%;
  font-family: "Dosis_400Regular";
`;

export const ButtonTextMail = styled(Text)`
  padding-vertical: 9%;
  margin-top: -10%;
  margin-left: 3%;
  font-family: "Dosis_400Regular";
`;

export const ButtonTextMSG = styled(Text)`
  padding-vertical: 4%;
  margin-top: -12.5%;
  margin-left: 18%;
  font-family: "Dosis_400Regular";
`;

export const ButtonTextTrash = styled(Text)`
  padding-vertical: 4%;
  margin-top: -12.5%;
  margin-left: 18%;
  font-family: "Dosis_400Regular";
`;

export const ButtonTextBlock = styled(Text)`
  padding-vertical: 4%;
  margin-top: -12.5%;
  margin-left: 18%;
  font-family: "Dosis_400Regular";
`;