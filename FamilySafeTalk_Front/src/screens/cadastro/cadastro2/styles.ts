import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity } from "react-native";
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

export const ButtonsContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  flex-direction: row;
`;

export const ButtonBoxAddDep = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1px;
  margin-bottom: 200px;
  margin-horizontal: 10px;
  padding-vertical: 35px;
  width: 85%;
  border-radius: 13px;
`;

export const ButtonBox3 = styled(ButtonBoxAddDep)`
  background-color: #A0C4FF;
  font-size: 50px;
`;

export const ButtonText = styled(Text)`
  font-size: 29px;
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

export const ButtonText2 = styled(Text)`
  font-size: 18px;
`;
