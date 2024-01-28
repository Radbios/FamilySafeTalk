import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px 0;
`;

export const ContentsBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  padding: 8px 0;
`;
export const TitleContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
`;

export const TitleText = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-family: "Dosis_600SemiBold";
`;

export const SubTitleText = styled(Text)`
  font-size: 23px;
  text-align: center;
  marginTop: 5px;
  font-family: "Dosis_400Regular";
`;

export const InputsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  `;
  
  export const InputsBox = styled(TextInput)`
  width: 99%;
  padding-vertical: 8px;
  margin-top: 15px;
  text-align: left;
  font-size: 18px;
  borderBottomWidth: 1px;
  font-family: "Dosis_400Regular";
`;