import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #ffb6c1;
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
  margin-top: 80px;
  margin-bottom: -30px;
`;

export const TitleText = styled(Text)`
  font-size: 25px;
  text-align: center;
`;

export const SubTitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 60%px;
  margin: 20px;
`;

export const SubTitleText = styled(Text)`
  font-size: 29px;
  text-align: center;
  marginTop: 50px
`;

export const InputsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
`;

export const InputsBox = styled(TextInput)`
  width: 99%;
  border-radius: 10px;
  border-color: #040f0f;
  border-width: 1px;
  padding-vertical: 10px;
  margin-top: 25px;
  text-align: center;
  font-size: 22px;
`;

export const BirthInputsContainer = styled(View)`
  align-items: left;
  justify-content: center;
  text-align: center;
  width: 90%;
`;

export const BirthInputsBox = styled(TextInput)`
  width: 80%;
  border-radius: 10px;
  border-color: #040f0f;
  border-width: 1px;
  padding-vertical: 10px;
  margin-top: 25px;
  text-align: center;
  font-size: 22px;
`;

export const ButtonsContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
`;

export const ButtonBox = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 90px;
  margin-horizontal: 10px;
  padding-vertical: 15px;
  width: 42%;
  border-radius: 13px;
`;

export const ButtonBox1 = styled(ButtonBox)`
  background-color: #adb5bd;
  font-size: 50px;
`;

export const ButtonBox2 = styled(ButtonBox)`
  background-color: #ffadad;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
`;
