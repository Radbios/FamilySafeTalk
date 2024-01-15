import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #a0c4ff;
`;

export const ContentsBox = styled(View)`
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 90%;
  height: 94%;
  border-radius: 10px;
`;

export const TitleContainer = styled(View)`
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const TitleText = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-family: "Dosis_600SemiBold";
`;

export const SubTitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 60%px;
  margin: 20px;
`;

export const SubTitleText = styled(Text)`
  font-size: 22px;
  text-align: center;
  font-family: "Dosis_600SemiBold";
`;

export const InputsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
`;

export const InputsBox = styled(TextInput)`
  width: 90%;
  border-radius: 10px;
  border-color: #040f0f;
  border-width: 1px;
  padding-vertical: 10px;
  margin-top: 10px;
  text-align: center;
  font-size: 22px;
  font-family: "Dosis_400Regular"
`;

export const ButtonsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
`;

export const ButtonBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  margin-horizontal: 10px;
  padding-vertical: 10px;
  width: 40%;
  border-radius: 10px;
`;

export const ButtonBox1 = styled(ButtonBox)`
  background-color: #adb5bd;
`;

export const ButtonBox2 = styled(ButtonBox)`
  background-color: #ffadad;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
  font-family: "Dosis_600SemiBold";
`;
