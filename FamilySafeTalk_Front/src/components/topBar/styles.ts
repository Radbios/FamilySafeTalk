import styled from "styled-components/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const Bar = styled(View)`
  width: 100%;
  height: 10%;
  background-color: #ffafcc;
  justify-content: space-between;
  flex-direction: row;
`;

export const LeftContents = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding: 5% 0 0 2%;
  width: 60%;
`;

export const UserContent = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 2%;
  width: 50%;
`;

export const TextUser = styled(Text)`
  font-family: "Dosis_600SemiBold";
  font-size: 20px;
`;

export const RightContent = styled(View)`
  width: 20%;
  flex-direction: row;
  padding: 6% 2% 0 0;
`;
