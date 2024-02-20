import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  ButtonsContainer,
  ButtonBox,
  ButtonName,
  DependentIndex
} from "./styles";

export default function Responsavel1() {

  const navigation = useNavigation();

  const handlePlusPress = () => {}

  const handleArrowLeftPress = () => {}

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <TouchableOpacity>
              <IconButton
                icon={() => (
                  <FontAwesome name="user" size={54} color="#FFFFFF" />
                )}
                style={{
                  backgroundColor: "#000000",
                  borderRadius: 40,
                  padding: 8,
                  width: 80,
                  height: 80,
                }}
              />
            </TouchableOpacity>
            <TitleText>Judite</TitleText>
          </TitleContainer>

          <DependentIndex>
            Dependentes
          </DependentIndex>

          <ButtonsContainer>
            <ButtonBox>
              <IconButton
                icon={() => <FontAwesome name="user" size={25} color="#FFFFFF" />}
                style={{
                  backgroundColor: "#000000",
                  borderRadius: 20,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <ButtonName>Bernardo</ButtonName>
            </ButtonBox>
          </ButtonsContainer>

          <View
            style={{
              position: "absolute",
              right: -15,
              top: 235,
            }}
          >
            <TouchableOpacity onPress={handlePlusPress}>
              <IconButton
                icon={() => (
                  <Feather name="arrow-right" size={25} color="#000" />
                )}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: -15,
              top: 170,
            }}
          >
            <TouchableOpacity onPress={handleArrowLeftPress}>
              <IconButton
                icon={() => <Feather name="plus" size={25} color="#888" />}
              />
            </TouchableOpacity>
          </View>

        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}
