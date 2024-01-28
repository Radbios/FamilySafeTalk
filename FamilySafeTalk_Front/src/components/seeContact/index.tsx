import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  ButtonsContainer,
  ButtonBox,
  ButtonBox1,
  ButtonTextBlock,
  ButtonTextTrash,
  ButtonTextMSG,
  PlaceholderTextButton,
  ButtonText,
} from "./styles";

export default function SeeContact() {

  const navigation = useNavigation();

  const handleArrowPress = () => {
    navigation.navigate('AddContact');
  }

  const handlePencilPress = () => {}

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
            <TitleText>Papai</TitleText>
          </TitleContainer>

          <ButtonsContainer>
            <ButtonBox1>
              <PlaceholderTextButton>Telefone celular</PlaceholderTextButton>
              <ButtonText>(99) 9999-9999</ButtonText>
            </ButtonBox1>
            <ButtonBox1>
              <PlaceholderTextButton>E-mail</PlaceholderTextButton>
              <ButtonText>example@mail.com</ButtonText>
            </ButtonBox1>

            <ButtonBox>
              <IconButton
                icon={() => <Feather name="send" size={25} color="#FF69B4" />}
                style={{
                  backgroundColor: "#FFAFCC",
                  borderRadius: 8,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <ButtonTextMSG>Enviar mensagem</ButtonTextMSG>
            </ButtonBox>

            <ButtonBox>
              <IconButton
                icon={() => <Feather name="trash" size={25} color="#7DA3E1" />}
                style={{
                  backgroundColor: "#A0C4FF",
                  borderRadius: 8,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <ButtonTextTrash>Excluir contato</ButtonTextTrash>
            </ButtonBox>

            <ButtonBox>
              <IconButton
                icon={() => <Feather name="slash" size={25} color="#FF69B4" />}
                style={{
                  backgroundColor: "#FFAFCC",
                  borderRadius: 8,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <ButtonTextBlock>Bloquear contato</ButtonTextBlock>
            </ButtonBox>
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
            <TouchableOpacity onPress={handlePencilPress}>
              <IconButton
                icon={() => <Feather name="edit-2" size={30} color="#000" />}
              />
            </TouchableOpacity>
          </View>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}
