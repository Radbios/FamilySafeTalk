import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 5%;
  padding: 3%;
`;

export const ContentsBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: flex-start;
  background-color: #ffadad;
  flex-direction: row;
  width: 90%;
  padding: 5%;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const InfosBox = styled(View)`
  align-items: center;
  justify-content: center;
  margin-left: 15%;
`;

export const NameText = styled(Text)`
  font-size: 25px;
  font-family: "Dosis_600SemiBold";
`;

export const AgeText = styled(Text)`
  font-size: 25px;
  font-family: "Dosis_600SemiBold";
`;

export const ButtonsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  width: 90%;
`;
export const ButtonBoxAddDep = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 1px;
  margin-horizontal: 10px;
  padding-vertical: 35px;
  width: 100%;
  border-radius: 13px;
`;

export const ButtonBox = styled(ButtonBoxAddDep)`
  background-color: #a0c4ff;
  font-size: 50px;
`;

export const ButtonText = styled(Text)`
  font-size: 29px;
  font-family: "Dosis_600SemiBold";
`;
