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
  flex-direction: row;
  width: 100%;
  padding: 5%;
  border-radius: 10px;
`;

export const InfosBox = styled(View)`
  align-items: center;
  justify-content: center;
  margin-left: 1%;
`;

export const NameText = styled(Text)`
  font-size: 20px;
  font-family: "Dosis_600SemiBold";
`;

export const Separator = styled(View)`
  height: 1px;
  background-color: #ccc; /* Cor da linha */
  width: 100%;
  margin-vertical: 5px; /* Espaço vertical entre a letra e a linha */
`;