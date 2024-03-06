import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: start;
  justify-content: center;
  width: 100%;
`;

export const ButtonContainer = styled(TouchableOpacity)`
  align-items: flex-end;
  justify-content: end;
  width: 100%;
  margin-top: 2%;
  padding-right: 5%;
`;
