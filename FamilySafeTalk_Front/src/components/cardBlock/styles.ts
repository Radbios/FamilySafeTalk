import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ContentBox = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  height: 80px;
  padding: 0 10px;
`;

export const InfosBox = styled(View)`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 5%;
`;

export const NameText = styled(Text)`
  align-items: center;
  justify-content: center;
  font-family: "Dosis_600SemiBold";
  font-size: 25px;
  margin-left: 5%;
`;

export const ButtonContainer = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const CancelBlockButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: #ffafcc;
  border-radius: 16px;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: black;
  font-family: "Dosis_600SemiBold";
`;
