import styled from "styled-components/native";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const MessageContainer = styled(View)`
  height: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 1%;
`;

export const MessageContents = styled(View)`
  width: auto;
  max-width: 72%;
  min-width: 20%;
  padding: 5%;
  background-color: #6c757d;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const MessagesText = styled(Text)`
  font-family: "Dosis_600SemiBold";
  color: #ffffff;
`;
