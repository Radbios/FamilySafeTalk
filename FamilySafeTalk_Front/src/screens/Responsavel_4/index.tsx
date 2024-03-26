import React, { useEffect } from "react";
import { View, TouchableOpacity, Settings, Image } from "react-native";
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
  ButtonTextPIN,
  ButtonTextCVS,
  ButtonTextCTT,
  SubTitleText
} from "./styles";
import api from "../../services/api";

export default function Responsavel4() {

  const navigation = useNavigation();

  const route = useRoute();
  const dependent = route.params.dependent;

  { /* const handleArrowPress = () => {}

       const handlePencilPress = () => {} */}
  
  const handleBlockedContacts = () => {
    navigation.push("Contatos Bloqueados", {dependent});
  }

  const handlePermissionContacts = () => {
    navigation.push("Solicitações de Amizade", {dependent});
  }
  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <Image source={require("../../../assets/gerenciar.png")}/>
            <TitleText>Gerenciar contatos</TitleText>
            <SubTitleText>Perfil de {dependent.name}</SubTitleText>
          </TitleContainer>

          <ButtonsContainer>
            {/* <ButtonBox>
                <IconButton
                    icon={() => <Feather name="users" size={25} color="#7DA3E1" />}
                    style={{
                    backgroundColor: "#A0C4FF",
                    borderRadius: 8,
                    padding: 1,
                    width: 38,
                    height: 38,
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
                  top: 6
                }}
              />
              <ButtonTextCVS>Ver contatos</ButtonTextCVS>
            </ButtonBox> */}
            <ButtonBox onPress={handlePermissionContacts}>
              <Image 
                source={require("../../../assets/iconBlocks.png")}
                style={{
                  width: 35, 
                  height: 35,
                  marginLeft: 15,
                  marginTop: 5,
                  marginBottom: 5
                }}
              />
              <IconButton
                icon={() => <Feather name="chevron-right" size={25} color="#000" />}
                style={{
                  width: 38,
                  height: 38,
                  position: "absolute",
                  right: -10,
                  top: 6
                }}
              />
              <ButtonTextCTT>Solicitações de amizade</ButtonTextCTT>
            </ButtonBox>
            <ButtonBox onPress={handleBlockedContacts}>
              <Image 
                source={require("../../../assets/iconBlocks.png")}
                style={{
                  width: 35, 
                  height: 35,
                  marginLeft: 15,
                  marginTop: 5,
                  marginBottom: 5
                }}
              />
              <IconButton
                icon={() => <Feather name="chevron-right" size={25} color="#000" />}
                style={{
                  width: 38,
                  height: 38,
                  position: "absolute",
                  right: -10,
                  top: 6
                }}
              />
              <ButtonTextCTT>Contatos bloqueados</ButtonTextCTT>
            </ButtonBox>

            

            {/* <ButtonBox>
              <IconButton
                icon={() => <Feather name="user-plus" size={25} color="#7DA3E1" />}
                style={{
                  backgroundColor: "#A0C4FF",
                  borderRadius: 8,
                  padding: 1,
                  width: 38,
                  height: 38,
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
                  top: 6
                }}
              />
              <ButtonTextPIN>Solicitações de amizade</ButtonTextPIN>
            </ButtonBox> */}
          </ButtonsContainer>

        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}
