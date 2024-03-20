import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";

import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  ButtonsContainer,
  ButtonBox1,
  PlaceholderTextButton,
  ButtonText,
} from "./styles";
//import api from "../../services/api";

export default function EditContact() {
  const navigation = useNavigation();
  //const route = useRoute();

  //const contact = route.params.contact;

  const handleArrowPress = () => {
    navigation.pop();
  };

  const handleCheckPress = () => {
    navigation.navigate("Ver Contato");
  };

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleText>Editar Contato</TitleText>
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
          </TitleContainer>

          <ButtonsContainer>
          <ButtonBox1>
              <PlaceholderTextButton>Nome</PlaceholderTextButton>
              <ButtonText>Julio</ButtonText>
            </ButtonBox1>
            <ButtonBox1>
              <PlaceholderTextButton>Sobrenome</PlaceholderTextButton>
              <ButtonText></ButtonText>
            </ButtonBox1>
            <ButtonBox1>
              <PlaceholderTextButton>Telefone celular</PlaceholderTextButton>
              <ButtonText>(82) 98888-8888</ButtonText>
            </ButtonBox1>
            <ButtonBox1>
              <PlaceholderTextButton>E-mail</PlaceholderTextButton>
              <ButtonText>julio@hotmail.com</ButtonText>
            </ButtonBox1>

          </ButtonsContainer>

          <View
            style={{
              position: "absolute",
              left: -15,
              top: 0,
            }}
          >
            <TouchableOpacity onPress={handleArrowPress}>
              <IconButton
                icon={() => (
                  <Feather name="arrow-left" size={30} color="#000" />
                )}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              right: -15,
              top: 0,
            }}
          >
            <TouchableOpacity onPress={handleCheckPress}>
              <IconButton
                icon={() => <Feather name="check" size={30} color="#4169E1" />}
              />
            </TouchableOpacity>
          </View>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}
