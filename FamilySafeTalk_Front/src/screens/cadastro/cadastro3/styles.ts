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
  background-color: white;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  padding: 8px 0;
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
  font-family: "Dosis_400Regular";
`;

export const SubTitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 60%;
  margin: 20px;
`;

export const SubTitleText = styled(Text)`
  font-size: 29px;
  font-family: "Dosis_600SemiBold";
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
  font-family: "Dosis_400Regular";
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
  font-family: "Dosis_400Regular";
`;

export const IconInputsContainer = styled(View)`
  width: 90%;
  margin-top: -48px;
  margin-left: 4%;
  align-items: flex-end;
`;

export const Icon = styled(Image)`
  width: 45px;
  height: 45px;
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
  padding-vertical: 10px;
  width: 40%;
  border-radius: 10px;
`;

export const ButtonBox1 = styled(ButtonBox)`
  background-color: #adb5bd;
  font-size: 50px;
`;

export const ButtonBox2 = styled(ButtonBox)`
  background-color: #FFAFCC;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
  font-family: "Dosis_600SemiBold";
`;
