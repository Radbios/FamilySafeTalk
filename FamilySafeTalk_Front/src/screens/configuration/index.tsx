import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
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
  ButtonBox,
  ButtonTextPref,
  ButtonTextPIN,
  ButtonTextCVS,
  ButtonTextCTT,
  SubTitleText
} from "./styles";
import { ButtonBox1, ButtonText } from "../login/styles";
import { PlaceholderTextButton } from "../editContact/styles";
import FriendshipRequestList from "../friendshipRequest";
import { useAuth } from "../../contexts/auth";
import { ConfiguraçõesStackNavigator } from "../../routes/app/stack.routes";

export default function Configuration() {
  const {singOut} = useAuth();
  const navigation = useNavigation();

  const blockedContacts = () => {
    navigation.navigate("Contatos Bloqueados")
  }
  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <ButtonsContainer>
            <ButtonBox onPress={blockedContacts}>
              <IconButton
                icon={() => <Feather name="sliders" size={25} color="#7DA3E1" />}
                style={{
                  backgroundColor: "#A0C4FF",
                  borderRadius: 8,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <IconButton
                icon={() => <Feather name="chevron-right" size={25} color="#000" />}
                style={{
                  width: 38,
                  height: 38,
                  position: "absolute",
                  right: -10,
                  top: 4
                }}
              />
              <ButtonTextPref>Contatos Bloqueados</ButtonTextPref>
            </ButtonBox>

            <ButtonBox onPress={() => singOut()}>
              <IconButton
                icon={() => <Feather name="sliders" size={25} color="#7DA3E1" />}
                style={{
                  backgroundColor: "#A0C4FF",
                  borderRadius: 8,
                  padding: 1,
                  width: 35,
                  height: 35,
                  marginLeft: 15,
                }}
              />
              <IconButton
                icon={() => <Feather name="chevron-right" size={25} color="#000" />}
                style={{
                  width: 38,
                  height: 38,
                  position: "absolute",
                  right: -10,
                  top: 4
                }}
              />
              <ButtonTextPref>Sair</ButtonTextPref>
            </ButtonBox>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}