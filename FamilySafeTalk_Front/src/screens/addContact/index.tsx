import React from "react";
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { IconButton } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native"

import {
  InputsBox,
  Container,
  ContentsBox,
  InputsContainer,
  SubTitleText,
  TitleContainer,
  TitleText,
} from "./styles";

export default function AddContact() {
  const navigation = useNavigation();
  
  const handleArrowPress = () => {};

  const handleCheckPress = () => {
    navigation.navigate('SeeContact');
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ContentsBox>
              <TitleContainer>
                <TouchableOpacity>
                  <IconButton
                    icon={() => (
                      <Feather name="plus" size={54} color="#FF69B4" />
                    )}
                    style={{
                      backgroundColor: "#ffb6c1",
                      borderRadius: 8,
                      padding: 8,
                      width: 80,
                      height: 80,
                    }}
                  />
                </TouchableOpacity>
                <TitleText>Adicionar contato</TitleText>
                <SubTitleText>Perfil de Bernardo</SubTitleText>
              </TitleContainer>
              <InputsContainer>
                <InputsBox placeholder="Nome" />
                <InputsBox placeholder="Sobrenome" />
                <InputsBox placeholder="Telefone Celular" />
                <InputsBox placeholder="E-mail" />
              </InputsContainer>
              <View
                style={{
                  position: "absolute",
                  left: 6,
                  bottom: -60,
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
                  right: 6,
                  bottom: -60,
                }}
              >
                <TouchableOpacity onPress={handleCheckPress}>
                  <IconButton
                    icon={() => (
                      <Feather name="check" size={30} color="#4169E1" />
                    )}
                  />
                </TouchableOpacity>
              </View>
            </ContentsBox>
          </Container>
        </ScrollView>
    </GestureHandlerRootView>
  );
}
