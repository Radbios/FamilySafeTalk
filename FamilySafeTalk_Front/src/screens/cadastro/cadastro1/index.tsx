import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import useAppRoute from "../../../routes/hooks/types";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import {
  Container,
  ContentsBox,
  TitleContainer,
  TitleText,
  SubTitleBox,
  SubTitleText,
  InputsContainer,
  InputsBox,
  ButtonsContainer,
  ButtonBox1,
  ButtonBox2,
  ButtonText,
} from "./styles";

export default function Cadastro1() {
  const { navigate } = useAppRoute().navigation;

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#a0c4ff' }}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={50}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <ContentsBox>
              <TitleContainer>
                <Image source={require("../../../../assets/logo.png")} />
                <TitleText>FamilySafeTalk</TitleText>
              </TitleContainer>
              <SubTitleBox>
                <SubTitleText>CADASTRO</SubTitleText>
              </SubTitleBox>
              <InputsContainer>
                <SubTitleText>Dados do Responsável:</SubTitleText>
                <InputsBox placeholder="Nome Completo" />
                <InputsBox placeholder="Telefone Celular" />
                <InputsBox placeholder="E-mail" />
                <InputsBox placeholder="Senha" />
              </InputsContainer>
              <ButtonsContainer>
                <ButtonBox1>
                  <ButtonText onPress={() => navigate("Login")}>
                    Voltar
                  </ButtonText>
                </ButtonBox1>
                <ButtonBox2>
                  <ButtonText onPress={() => navigate("Register2")}>
                    Próximo
                  </ButtonText>
                </ButtonBox2>
              </ButtonsContainer>
            </ContentsBox>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
}
