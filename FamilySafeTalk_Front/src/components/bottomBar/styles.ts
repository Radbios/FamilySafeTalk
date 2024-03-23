import styled from "styled-components/native";
import { View, TouchableOpacity, TextInput } from "react-native";

export const Bar = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 10%;
  background-color: #ffafcc;
  justify-content: space-between;
  flex-direction: row;
`;

export const InputsContainer = styled(View)`
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  width: 100%;
`;

export const InputsBox = styled(TextInput)`
  width: 80%;
  background-color: #edede9;
  border-radius: 5px;
  border-color: #a0c4ff;
  border-width: 1px;
  padding-vertical: 1px;
  margin-top: 2%;
  text-align: center;
  font-size: 22px;
  font-family: "Dosis_400Regular";
`;

export const ButtonSend = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2%;
  margin-left: 2%;
`;