import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

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
  font-family: "Dosis_400Regular";
`;

export const SubTitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  width: 60%px;
  margin: 20px;
`;

export const SubTitleText = styled(Text)`
  font-size: 29px;
  font-family: "Dosis_600SemiBold";
  text-align: center;
  margintop: 50px;
`;

export const ButtonsContainer = styled(View)`
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  flex-direction: row;
  margin-top: 10%;
`;

export const ButtonBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 9%;
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
  background-color: #ffadad;
`;

export const ButtonText = styled(Text)`
  font-size: 18px;
  font-family: "Dosis_600SemiBold";
`;
