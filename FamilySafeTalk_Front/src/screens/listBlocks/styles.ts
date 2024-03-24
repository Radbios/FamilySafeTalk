import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(View)`
  flex-grow: 1;
  align-items: center;
`;

export const ImageContainer = styled(View)`
  margin-top: 2%;
  align-items: center;
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
  margin-top: 10%;
  width: 100%;
  height: 60%;
  padding: 0 5% 0 5%;
`;

export const BackContainer = styled(TouchableOpacity)`
  width: 100%;
  align-items: start;
`;

export const NoBlockedContactsText = styled(Text)`
  font-family: "Dosis_400Regular";
  font-size: 25px;
`;
