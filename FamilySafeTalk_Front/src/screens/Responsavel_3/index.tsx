import React from "react";
import { TouchableOpacity, Image } from "react-native";
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
  ButtonTextPref,
  ButtonTextPIN,
  ButtonTextCVS,
  ButtonTextCTT,
  SubTitleText
} from "./styles";

export default function Responsavel3() {

  const navigation = useNavigation();

  {/* const handleArrowPress = () => {}

      const handlePencilPress = () => {} */}

  return (
    <GestureHandlerRootView>
      <Container>
        <ContentsBox>
          <TitleContainer>
            <TitleText>Perfil de Bernardo</TitleText>
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
            <TouchableOpacity>
            <SubTitleText>Adicionar ou alterar imagem</SubTitleText>
            </TouchableOpacity>
          </TitleContainer>

          <ButtonsContainer>
            <ButtonBox>
                <IconButton
                    icon={() => <Feather name="message-square" size={25} color="#FF69B4" />}
                    style={{
                    backgroundColor: "#FFAFCC",
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
                <ButtonTextCVS>Conversas de Bernardo</ButtonTextCVS>
            </ButtonBox>

            <ButtonBox>
              <Image 
                  source={require("../../../assets/gerenciar.png")}
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
                  top: 4
                }}
              />
              <ButtonTextCTT>Gerenciar contatos</ButtonTextCTT>
            </ButtonBox>

            <ButtonBox>
              <IconButton
                icon={() => <Feather name="map-pin" size={25} color="#FF69B4" />}
                style={{
                  backgroundColor: "#FFAFCC",
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
              <ButtonTextPIN>Localização em tempo real</ButtonTextPIN>
            </ButtonBox>

            <ButtonBox>
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
              <ButtonTextPref>Preferências</ButtonTextPref>
            </ButtonBox>
          </ButtonsContainer>
        </ContentsBox>
      </Container>
    </GestureHandlerRootView>
  );
}