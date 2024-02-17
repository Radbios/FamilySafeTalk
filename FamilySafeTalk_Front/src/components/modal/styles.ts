import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ModalContainer = styled(View)`
  background-color: transparent;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
`;

export const ModalBox = styled(View)`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
export const ImageContainer = styled(View)`
  align-items: center;
`;

export const MessageContainer = styled(View)`
  margin-top: 20px;
  align-items: center;
`;

export const MessageTextBold = styled(Text)`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-family: "Dosis_600SemiBold";
`;

export const MessageText = styled(Text)`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-family: "Dosis_400Regular";
`;

export const ButtonContainer = styled(View)`
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`;

export const CancelButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: #adb5bd;
  border-radius: 16px;
  width: 30%;
  align-items: center;
`;

export const DeleteButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: #ffafcc;
  border-radius: 16px;
  width: 30%;
  align-items: center;
`;

export const ButtonText = styled(Text)`
  color: black;
  font-family: "Dosis_600SemiBold";
`;
