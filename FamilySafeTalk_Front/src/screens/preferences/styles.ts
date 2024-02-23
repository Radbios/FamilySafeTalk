import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;
export const TitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;
export const TitleText = styled(Text)`
  font-family: "Dosis_600SemiBold";
  font-size: 32px;
`;

export const SubtitleBox = styled(View)`
  align-items: center;
  justify-content: center;
  margin-top: 2%;
`;
export const SubtitleText = styled(Text)`
  font-family: "Dosis_400Regular";
  font-size: 25px;
`;

export const ContentsContainer = styled(View)`
  align-items: start;
  justify-content: center;
  margin-top: 10%;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
`;

export const ContentBox = styled(View)`
  align-items: start;
  justify-content: center;
  margin-bottom: 5%;
`;

export const ContentText = styled(Text)`
  font-family: "Dosis_600SemiBold";
  color: #6c757d;
  font-size: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #6c757d;
`;

export const InputContainer = styled(View)`
  border-top: solid;
`;
export const RadioBox = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-right: 10%;
`;
export const RadioButtonText = styled(Text)`
  font-size: 20px;
  margin-left: 8px;
  font-family: "Dosis_400Regular";
`;
